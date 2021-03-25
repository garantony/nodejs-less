// 1.Գրել ծրագիր, որը կստուգի , եթե req.url /sunny է, ապա console-ում տպի Yes.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/sunny') {
    res.end('sunny');
    console.log('yes');
  }else {
    res.writeHead(404);
    res.end('404 Not Found ')
  }
});
server.listen(3000, 'localhost');
