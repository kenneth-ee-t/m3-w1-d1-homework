var http = require('http');

var hostname = 'localhost';
var port = 5000;

var server = http.createServer(function (req, res) {
    var url = req.url;

    console.log('Request made');
    if (url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Home Page.</h1></body></html>');
    } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>About Page.</h1></body></html>');
    } else if (url === '/contact') {    
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html><body><h1>Contact Page.</h1></body></html>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('Invalid Request');
    }

});
    server.listen(5000, 'localhost', function () {
        console.log('The node.js server on port 5000 is now running....');
    });