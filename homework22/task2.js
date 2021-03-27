// 2. Ստեղծել express framework-ով web aplication : Ստեղծել /users route , որին կարող են կատարել GET, POST , PUT և DETELE
// մեթոդներով request-ներ ։ Բոլորի դեպքում վերադարձնում որպես response ժամը և մեթոդի անունը։

const express = require('express');
const app = express();
let date = new Date;

app.listen(3000);
app.get('/users', (req, res) => {
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
}).post('/users', (req, res) => {
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
}).put('/users', (req, res) => {
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
}).delete('/users', (req, res) => {
  res.end(date.getHours() + ':' + date.getMinutes() + '-' + req.method + ' method');
});
