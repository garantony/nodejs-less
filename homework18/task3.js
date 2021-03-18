// 3․ Ստեծել ֆունկցիա , որը input.txt ֆայլի պարունակությունը կկարդա , հետո պարունակության տեքստը կկիսի երկու մասի և միաժամանակ կգրի առաջին
// մասը output1.txt , իսկ երկրորդը output2.txt ֆայլերի մեջ։ Օգտվել 'fs/promises' գրադարանից և օգտագործել async/await:

const fs = require('fs/promises');

fs.readFile("./input.txt").then(function(val){
  const part1 = val.toString().substr(val.length[0], val.length/2);
  const part2 = val.toString().slice(val.length/2);
  fs.writeFile("output1.txt", part1);
  fs.writeFile("output2.txt", part2);
})
