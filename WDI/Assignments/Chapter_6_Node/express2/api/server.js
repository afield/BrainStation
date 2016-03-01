var express = require('express');
var app = express();

//instance of mongoose
var mongoose = require('mongoose');
//connect to created directory where db connection is
mongoose.connect('mongodb://localhost/data/db/');

//log to console any errors
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


app.use(express.static(__dirname + './../app/'));

app.listen(8080, function() {
	console.log('Server Started  on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});
