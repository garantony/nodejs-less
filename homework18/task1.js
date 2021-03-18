// 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է 5-ից reject է անում ,
// հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։

function checkNum(min, max) {
    return new Promise(function(resolve, reject) {
    let rand = Math.floor(Math.random() * (max - min) + min);
    if (rand > 5) {
      resolve("resolved " + rand)
    }else {
      reject("rejected " + rand)
    }
  })
}
checkNum(0, 10).then((date) => console.log(date)).catch((date) => console.log(date));
