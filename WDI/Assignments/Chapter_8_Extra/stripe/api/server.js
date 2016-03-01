express = require('express');

app = express();

app.use(express.static(__dirname + './../app/'));

//start server and database
	app.listen(8080,function(){
		console.log('Listening on http://localhost:8080');
		console.log('Stop Server With CTRL + C');
})