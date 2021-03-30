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
const fs = require('fs');
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

app.get('/users', (req, res) => {
  res.end('get');
}).post('/users', upload.single('image'), (req, res) => {
  fs.readFile(__dirname + '/user.json', (err, date) => {
    if (err) {
      throw(err)
    }else {
      fs.appendFileSync(__dirname + '/user.json', '"username:" {}')
    }
    fs.readFile(__dirname + '/user.json', 'utf8', (err, date) => {
      if (err) {
        throw(err)
      } else if (date.includes("username")) {
        res.json({success: false, data: null, message: 'username is taken'})
      } else {
        res.json({success: true, data: req.body + req.file.path, message: 'user created'})
      }

    })

  })

});

app.listen(3000);
