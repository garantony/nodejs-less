// 2.Server-ում ունենք sunny.txt ֆայլ: Ստեղծել սերվեր, որին հարցում ուղարկելիս եթե կա query-ի մեջ file
// դաշտը և այն հավասար է "sunny", որպես response ստանա sunny.txt պարունակությունը այլապես 404 status-ով ստանա "File Not Found".
// (Օգտագործել Get մեթոդը):

const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
  let u = url.parse(req.url, true);
  if (u.pathname === '/sunny') {
    fs.readFile('./sunny.txt', (err, date) => {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(date);
    });
  } else {
    res.writeHead(404);
    res.end('404 Not Found');
  }
});
server.listen(3000);
