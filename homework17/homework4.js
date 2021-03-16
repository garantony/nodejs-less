// 4.Գրել ծրագիր որ աշխատացնելիս  input.txt կկարդա պարունակությունը , որից հետո այդ պարունակության բոլոր
// բացատները կփոխարին - ներով: Այնուհետև գծիկներով տեքստ գրել write.txt ֆայլում:

const fs = require("fs");

replaceSpace = fs.readFileSync("input.txt", "utf8").replace(/ /g, "-");

fs.writeFileSync("write.txt", replaceSpace);
