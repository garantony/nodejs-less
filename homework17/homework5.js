// 5.Գրել ծրագիր որ աշխատացնելիս sync կկարադա նախորդ չորս տնայիների ֆայլերի պարունակությունը(Օրինակ homework1.js,
// homework2.js, homework3.js, homework4.js): Այնուհետև ծրագիրը պետք է ստեղծի txt ֆայլ, որի անուն կազմված կլնի
// օպերացոն համակարգի անունից և այդ պահին ժամ րոպե վարկյանից(win32_14_14_58.txt) և այդ ֆայլում գրել նախորդ ֆայլերի
// պարունակությունը:

const fs = require("fs");
const os = require("os");
let hw1 = fs.readFileSync("homework1.js","utf8");
let hw2 = fs.readFileSync("homework2.js","utf8");
let hw3 = fs.readFileSync("homework3.js","utf8");
let hw4 = fs.readFileSync("homework4.js","utf8");
let allHw = hw1 + hw2 + hw3 + hw4;
let date = new Date();
const fileName = os.platform()+ "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + ".txt";

fs.writeFileSync(fileName, allHw);


// console.log(fs.writeFileSync(fileName, allHw));
