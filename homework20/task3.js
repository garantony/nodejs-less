// 3.Գրել ծրագիր, որը կկարդա homework3.txt ֆայլի պարունակությունը, տեքստից կհեռացնի  ստորակետները  և կգրի
// replace.txt ֆայլում, որից հետո ջնջել homework3.txt ֆայլը:
const fs = require('fs');

fs.readFile('homework3.txt', (err, date) => {
  if (err) {
    throw err;
  }else {
    fs.writeFile('replace.txt', date.toString().replace(/,/g, ''), (err) => {
      if (err) {
        throw err;
      }
    })
  }
})
fs.unlink('homework3.txt', (err) => {
  if (err) {
    throw err;
  }
  console.log('completed');
})
