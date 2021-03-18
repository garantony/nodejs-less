// 2․ ՈՒնենք config.json ֆայլ , պարունակությամբ ․ Ստեղծել սերվեր , որը լսում է json-ի մեջ լրացված հոսթին և պորտին։
// {
// "host" : "localhost",
// "port" : 3000
// }

const http = require("http");
const json = require("./config.json");

const server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(json));
}).listen(json.port, json.host);
