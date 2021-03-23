// 5.Գրել ծրագիր որ կկարդա Homework5 պապկայի ֆայլերը,  կստեղծի newDir պապկա և այնտեղ կտեղափոխի այն ֆայլերը
// իրենց պարունակություններով որոնք 1kB մեծ են :

const fs = require('fs');

fs.readdir(__dirname, (err, file) => {
  if (err) {
    throw err;
  } else {
    fs.mkdir('newDir', (err) => {
      if (err) {
        throw err;
      }
    });
    file.forEach((item) => {
      fs.stat(item, (err, stat) => {
        if (err) {
          throw err;
        }else if (stat.size > 700) {
          fs.createReadStream(item).pipe(fs.createWriteStream('./newDir/' + item));
        }
      });
    });
  }
});
