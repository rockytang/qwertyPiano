var express = require('express');
var app = express();
// middleware morgan
var morgan = require('morgan');
// body parser middleware that parses json req
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/client'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;

var server = app.listen(port, function(){
  var port = server.address().port;

  console.log('App is listening on:', port);
})
