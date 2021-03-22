// 4.Ստեղծել Promise վերադարձնող ֆունկցիա որը ստանում է տեքստ ֆայլի հասցե և տեքստի բառերի առաջին տառերը սաքում մեծատառ․
const fs = require('fs').promises;
// function strFirstCharToUppercase(path) {
//   return new Promise(function(resolve, reject) {
//     let read = fs.readFile(path).toString();
//     fs.writeFile(path, read.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
//     resolve();
//   });
// }
//
// strFirstCharToUppercase('./text.txt').then(function () {
//   console.log("date")
// }).catch(function (err) {
//   console.log(err)
// })


async function firstLetterToUppercase(path) {
    const data = (await fs.readFile(path)).toString();
    // data.replace(/^(\w)|\s+(\w)/gi, letter => letter.toUpperCase())
    await fs.writeFile(path, data.split(/\b/).map(word => word[0].toUpperCase() + word.slice(1)).join(''));
}

firstLetterToUppercase('./text.txt').then(() => {
    console.log('done');
}).catch((err) => {
    console.log(err);
})
