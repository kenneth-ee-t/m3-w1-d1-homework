var http = require('http');
var hostname = 'localhost'; 
var port = 5000;

var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
    var url = req.url;
   // console.log('Request made');
    if (url === '/home') {
        fs.readFile(path.join(__dirname, 'home.html'), function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Error loading home.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (url === '/about') {
        fs.readFile(path.join(__dirname, 'about.html'), function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Error loading about.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }  
        });
    } else if (url === '/contact') {
        fs.readFile(path.join(__dirname, 'contact.html'), function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end('Error loading contact.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
} else if (url === '/styles.css') {
    fs.readFile(path.join(__dirname, 'styles.css'), function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error loading styles.css');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        }
    });
} else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
}
});
server.listen(port, hostname, function () {
    console.log('The node.js server on port 5000 is now running....');
});