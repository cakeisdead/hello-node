/*
### Node Server 
*/
var app = require('http').createServer(handler)
	, io = require('socket.io').listen(app)
	, fs = require('fs')
	, path = require('path')
app.listen(8080);

function handler (req, res) {

	var contentTypesByExtention = {
  		'.html': 'text/html',
  		'.js':   'text/javascript',
  		'.css':  'text/css'
	};	

	var filePath = '.' + req.url;

	if (filePath === './' || req.url === '/')
		filePath = './index.html';
	var extname = path.extname(filePath);	
	var contentType = contentTypesByExtention[extname];	

	console.log(filePath);
	fs.readFile(filePath, function (err, data) {
			if (err) {
				res.writeHead(500);
				return res.end('You broke it...');
			}
			res.writeHead(200, {'Content-Type': contentType});
			res.end(data, 'utf8');
		});
}

/*
### Socket.IO
*/

io.sockets.on('connection', function(socket){
	socket.emit('welcome', 'Welcome dude! :)');
	/**socket.on('other', function(data) {
		console.log(data);
	});**/
});