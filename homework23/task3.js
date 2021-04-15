const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs').promises;
const mongoose = require('mongoose');
const Users = require('./users');
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

const mimeType = require('mime-types');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + mimeType.extension(file.mimetype));
  }
});
const upload = multer({
  storage: storage
});

app.get('/users', async (req, res) => {
  const user = await Users.find();
  res.json({
    success: true,
    data: user,
    });
}).post('/users', upload.single('image'), async (req, res) => {

  if (await Users.exists({
      username: req.body.username
    })) {
    res.json({
      success: false,
      data: null,
      message: 'username is taken'
    });
  } else {
    const user = new Users({
      name: req.body.name,
      username: req.body.username,
      image: req.file.path
    })
    await user.save()
    res.json({
      success: true,
      data: user,
      message: 'user created'
    })
  }
});
app.get('/users/:id', async (req, res) => {
  const user = await Users.findById(req.params.id)
  if (user) {
    res.json(user.username);
  } else {
    res.json('user not found')
  }
}).delete('/users/:id', async (req, res) => {
  const user = await Users.findById(req.params.id)

  if (user) {
    await fs.unlink(user.image);
    await user.remove();
    res.json('user was deleted');
  } else {
    res.json('user not found');
  }
})
mongoose.connect('mongodb://localhost/nodejs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
  app.listen(3000);
})
