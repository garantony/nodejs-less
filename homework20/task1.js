// 1. Գրել ծրագիր որը կստեղծի ֆայլ Ձեր համակարգչի user անունով և այդ ֆայլում գրել համակարգչի userinfo-ն:

const fs = require('fs');
const os = require('os');

fs.writeFile(os.userInfo().username + '.txt', JSON.stringify(os.userInfo(), null, 2), (err) => {
  if (err) {
    throw err;
  }
  console.log('File created successfully');
});
