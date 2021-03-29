// 1. Գրել ծրագիր որ թույլ կտա վերբեռնել ֆայլ և պահպանել Homework պապկայի upload պապակայում ՝ պահպանելիս ընտրել պատահական 6-անիշ
// թվերից կազմված անուն:
const express = require('express');
const multer = require('multer');
const app = express();
const mimeType = require('mime-types');
const random = require('random');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, random.int(0,1000000) + '.' + mimeType.extension(file.mimetype));
    }
});
const upload = multer({storage: storage});

app.post('/', upload.single('image'), (req, res, next) => {
  res.end('file uploaded');
})
app.listen(3000)
