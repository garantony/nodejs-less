// 1. Ստեղծել Promise վերադարձնող ֆունկցիա , որը գեներացնում է 0 - 10 միջակայքի թիվ և ստուգում , եթե թիվը փոքր է 5-ից reject է անում ,
// հակառակ դեպքում resolve . Աշխատացնել ֆունկցիան և տպել արժեքները։

const numRandom = Math.floor(Math.random() * 11);

function checkNum(min, max) {
  let rand = Math.floor(Math.random() * (max - min) + min);
  return new Promise(function(resolve, reject) {
    if (rand > 5) {
        resolve()
    }else{
      reject()
    }
  })
}

checkNum(0, 10).then(function () {
    console.log("d")
})
