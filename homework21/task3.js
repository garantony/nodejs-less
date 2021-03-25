// 3. Server-ում ունենք users.json ֆայլ, որը զանգված է կազմված "fisrt_name", "last_name", "email", "age" դաշտեր պարունակող օբյեկտներից։
//  Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ filter դաշտը , վերադարձնել users.json-ից զանգված միայն այն օբյեկներից ,
//  որոնց "fisrt_name" կամ "last_name" պարունակում է filter-ի արժեքը։

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  fs.readFile('./users.json','utf8', (err, date) => {
    let js = JSON.parse(date);
    let urlDate = url.parse(req.url, true);
    if (urlDate.query.filter) {
    console.log(js[0].fisrt_name || js[1].last_name === urlDate.query.filter);
    }
  })
});
server.listen(3000)
