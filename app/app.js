//load express module

var express = require('express'),
app = express.createServer();

//respond to requests for / with hello world

app.get('/', function(req, res){
	res.send('Hello Worldies');
});

//listen on port 80 - like a real web server
app.listen(80);
console.log('Express server started successfully');
