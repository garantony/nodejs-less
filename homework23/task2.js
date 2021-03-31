// 2. Ունենք users.json ֆայլ , այն սկզբում պարունակում է դատարկ օբյեկտ․ Ոնենալ users route որի վրա կարելի է կատարել get և post request :
// post -ի body-ն պարունակելու է username, name, image դաշտերը։ Post անելուց հետո users.json-ի պաունակությունը կարդալ ամբողյությամբ ,
// հետո այդ json-ի մեջ ավելացնել username key-ով օբյեկ , որի մեջ կա username, name և image (image-ը save արած image-ի path-ն է,
// multer-ի միջոցով save անել) , հետո փոխել json-ի պարունակությունը և գրել users.json-ի մեջ։ Նախքան ավելացնելը ստուգել եթե այս
// username-ով արդեն կա օբյեկ json ֆայլի մեջ , ապա վերադարձնել res.json()-ի մեջ {success: false, data: null, message: 'username is taken'}},
// հակարակ դեպքում վերադարձնել success-ը true , data-ն ավելացված օբյետը , իսկ message-ը "user created" :
// Ոնենալ դինամիկ route 'users/:username' , որի վրա կարելի է կատարել get , delete մեթոդով request :
// get-ի դեպքում վերադարձնում է համապատասխան user-ի data-ն users.json ֆայլից ։ delete-ի դեպքում ջնջում է user-ի data-ն users.json ֆայլից ։


const express = require('express');
const app = express();
const multer = require('multer');
const fs = require('fs').promises;
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

app.get('/users', (req, res) => {
  res.end('get');
}).post('/users', upload.single('image'), async (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const json = JSON.parse(await fs.readFile('user.json', 'utf-8'));

  if (json[username]) {
    res.json({
      success: false,
      data: null,
      message: 'username is taken'
    });
  } else {
    json[username] = {
      username,
      name,
      image: req.file.path
    }
    await fs.writeFile('user.json', JSON.stringify(json, null, 2))
    res.json({
      success: true,
      data: json[username],
      message: 'user created'
    })
  }

});
app.get('/users/:username', async (req, res) => {
  const getData = JSON.parse(await fs.readFile('user.json', 'utf-8'));
  if (getData[req.params.username]) {
    res.json(getData[req.params.username]);
  } else {
    res.json('user not found')
  }
}).delete('/users/:username', async (req, res) => {
  const json = JSON.parse(await fs.readFile('user.json', 'utf-8'));

  if (json[req.params.username]) {
    delete json[req.params.username];
    await fs.writeFile('user.json', JSON.stringify(json, null, 2));
    res.json('user was deleted')
  } else {
    res.json('user not found');
  }
})

app.listen(3000);
