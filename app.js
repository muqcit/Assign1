var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/test', function (req, res) {
  res.send('Hello World test!');
});
app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});