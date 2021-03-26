// 1.  Ստեղծել homework իրադարձությունը լսող , որը կկանչի handler :
// handler-ը պետք է արտածի Homeworks.txt պարունակությունը: emit անել homework :

const fs = require('fs');
const events = require('events');
const myEvnt = new events.EventEmitter();

myEvnt.on('homework', () => {
  fs.readFile('./homeworks.txt', (err, date) => {
    console.log(date.toString());
  })
});
myEvnt.emit('homework');
