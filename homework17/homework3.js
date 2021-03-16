// 3.Գրել ծրագիր որը աշխատացնելիս կստեղծի 8 նիշանոց պատահական թվերից կազմված անուն ունեցող
// txt ֆայլ և այդ ֆայի մեջ Օպերացիան համակարգի central processing unit (CPU) քանակը(os.cpus()):
let fs = require('fs');
let os = require('os');
let rand = Math.floor(Math.random() * 1000000000) + ".txt";
let cpu = os.cpus();
fs.writeFile(rand, JSON.stringify(cpu), function(err, date){});
