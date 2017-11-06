var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser= require('body-parser');
var app = express();
var db;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);
require('./routes/routes.js').init(app);
  
app.use(function(req, res) {
	var message = 'Error, did not understand path '+req.path;
	console.log(message)
  res.send("ERROR");
});

app.listen(50000);
