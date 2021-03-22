// 3.Ստեղծել RemoveSpecialChars կլաս, որը ժառանգում է  Transform կլասին: _transform մեթոդը վերասահմանել այնպես,
// որ իր միջով անցնող տեքստից հեռացնել հատուկ սիմվոլները:
// Կլասից ստեղծել օբեկտ: homeworkr5.txt պարունակությունը pipe անել օբեկտով և պահապանել homeworkw5.txt ֆայլում:

const { Transform } = require('stream');
const fs = require('fs');
class RemoveSpecialChars extends Transform {
    _transform(chunk, encoding, callback){
        this.push(chunk.toString().replace(/[^a-zA-Z0-9]/g, ""))
        callback();
  }
}

const trans = new RemoveSpecialChars();
let read = fs.createReadStream('homework5.txt');
let write = fs.createWriteStream('homeworkw5.txt');

read.pipe(trans).pipe(write);
