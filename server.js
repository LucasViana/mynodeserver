var http = require('http');
var fs = require('fs');
var filename = './index.html';
http.createServer(function(req,res){
	res.writeHead(200, {'Content-type':'text/html'});
	fs.readFile(filename, 'utf8', function(err,data){
		if(err) throw err;
		res.write(data);
		res.end;
	});
}).listen(80,'104.131.164.147');