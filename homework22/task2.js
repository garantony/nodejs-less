// 2. Ստեղծել express framework-ով web aplication : Ստեղծել /users route , որին կարող են կատարել GET, POST , PUT և DETELE
// մեթոդներով request-ներ ։ Բոլորի դեպքում վերադարձնում որպես response ժամը և մեթոդի անունը։

const express = require('express');
const app = express();

app.listen(3000);
app.get('/users/route', (req, res) => {
  let date = new Date;
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
});

app.post('/users/route', (req, res) => {
  let date = new Date;
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
});

app.put('/users/route', (req, res) => {
  let date = new Date;
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
});

app.delete('/users/route', (req, res) => {
  let date = new Date;
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
});
