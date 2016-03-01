//var sum = 0;
//
//for(i = 0; i < process.argv.length; i++){
//    sum = process.argv[i];
//    sum = parseInt(sum)+parseInt(sum);
//}
//
//console.log(sum);
//
//

// use node's http module 
var http = require('http');
	
// use http's get method to access a URL and write a callback
http.get('http://www.brainstation.io', function(response){
	
	var body = '';
	
	response.on('data', function(chunk){

		console.log('Body: ' + chunk)	

		// re-assemble the chunk
		body += chunk;
		
	});
	
	// final re-assembly
	response.on('end',function(){
		console.log('Final Body: ' + body);
	});
	
});