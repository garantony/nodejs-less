// 1. Ստեղծել readStream որը input.txt-ից կկարդա ինֆորմացիան 10 բայթով և կաևտածի կոնսոլում այն chunk-երը , որոնք հատուկ սիմվոլներ չունեն:

const fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/input.txt', {
  highWaterMark: 10
});
let r = /[^a-zA-Z]/g;
readStream.on('data', function (chunk) {
  console.log(chunk.toString().replace(r, ""));
});
