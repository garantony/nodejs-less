// 2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը:
// Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել: Ծրագիրը աշխատացնել homework4Eng.txt համար:

const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/homework4Eng.txt', {
  highWaterMark: 1
});
readStream.on('data', function (chunk) {
  let obj = {
    a: 'ա',
    b: 'բ',
    // c: 'ց',
    // d: 'դ',
    // e: 'ե',
    // f: 'ֆ',
    // g: 'գ'
  };
  if (chunk.toString() === Object.keys(obj).join("")) {
    console.log(Object.values(obj).join(''))
  }
});
// console.log(Object.keys(obj))
