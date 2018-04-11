var express = require('express');
var app = new express();



app.get('/', function(req,res){
		res.render('./../app/index.ejs',{});
	})
	.use(express.static(__dirname + '/../.tmp'))
	.listen(50000);

//this has to be the last route, you can't add any more routes after this code
//this renders the index.ejs for all requests which aren't handled by previous routes
app.get('*', function(req,res){
		res.render('./../app/index.ejs',{});
	})
