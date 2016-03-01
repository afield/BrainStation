var http = require('http');
var teamnumber = 'team4';

var request = http.get('http://174.129.248.23/brainstation/shop/retrieve_products/' + teamnumber,function(response) {

	var body = "";

	response.on('data',function(chunk) {
		body += chunk;
	});

	response.on('end',function() {
		if(response.statusCode === 200){
			try {
				console.log(JSON.parse(body));
			} catch(e) {
				console.log('Could not parse JSON object');
			}
		}
	});

});