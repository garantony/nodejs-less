// 4.Ունենք const web=['html','css','js','txt'] զանգված: Գրել ծրագի որ կստեղծի զանգվածի անունով պապկա:
// Զանգվածի անդամներից այդ պապկայում ստեղծել  ֆայլեր հերթական անդամի անունով և վերջավորությունն էլ նույնը լինի(օրինակ html.html)
// պարունակություն էլ այդ անդամը:

const fs = require('fs');
const web = ['html', 'css', 'js', 'txt'];

fs.mkdir('web', (err) => {
  if (err) {
    throw err;
  }
  for (var i = 0; i < web.length; i++) {
    fs.writeFile('./web/' + web[i] + '.' + web[i], web[i], (err) => {
      if (err) {
        throw err;
      }
    })
  }
})
