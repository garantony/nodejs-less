// 4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․
const fs = require('fs');

function strFirstCharToUppercase() {
  return new Promise(function(resolve, reject) {
    fs.readFile('./text.txt', (err, date) => {
      if (err) {
        throw err;
        reject()
      } else {
        fs.writeFile('./text.txt', date.toString().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '), (err, date) => {
          if (err) {
            throw err;
          }
        });
        resolve();
      }
    });
  });
}
strFirstCharToUppercase().then(function () {
  console.log("done")
}).catch(function (err) {
  console.log(err)
})
