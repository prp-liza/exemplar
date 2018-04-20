const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = new express();

// connect to mongodb
mongoose.connect('mongodb://localhost/examplar'); 
mongoose.Promise = global.Promise;

// middleware Body Parser
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/api-faqs'));
app.use('/', require('./routes/api-faqs'));


// error handling middleware for REST api
app.use(function(err, req, res, next){
	//console.log(err);
	res.status(422).send({error:err.message});
});

app.get('/', function(req,res){
		res.render('./../app/index.ejs',{});
	})
	.use(express.static(__dirname + '/../public'))
	.listen(50000);

//this has to be the last route, you can't add any more routes after this code
//this renders the index.ejs for all requests which aren't handled by previous routes
app.get('*', function(req,res){
		res.render('./../app/index.ejs',{});
	})
