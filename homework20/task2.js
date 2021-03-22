// 2. Գրել ծրագիր որ նախորդ առաջադրանքի կողմից ստեղծված ֆայլ կանվանափոխի այդ պահի ամիս, օր, ժամ,
// րոպեով, վայրկյանով (Օրինակ 10_11_15_32_13.txt):

const fs = require('fs');
const os = require('os');
const date = new Date();
let fileName = date.getMonth() + '_' + date.getDay() + '_'  + date.getHours() + '_'  + date.getMinutes() + '_'  + date.getSeconds();
fs.rename(os.userInfo().username + '.txt', fileName + '.txt', (err) => {
  if (err) {
    throw err;
  }
  console.log('file successfully renamed');
});
