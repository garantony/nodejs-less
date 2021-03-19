// 2.Գրել ծրագիր որ լատինատառ տեքստը որևէ մոտավորությամբ կսարքի հայատառ: Օրինակ ա տառը կդառնա a:Այդպես բոլոր տառերը:
// Ստեղծել readStream և highWaterMark:1  նշելով բոլոր սիմվոլների վրայով անցնել: Ծրագիրը աշխատացնել homework4Eng.txt համար:

const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/homework4Eng.txt', {
  highWaterMark: 1
});

readStream.on('data', function (chunk) {
  console.log(chunk.toString().replace());
});
