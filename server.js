var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
