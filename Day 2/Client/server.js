//START DAY 2
//PATH AND FS
const fs = require('fs');
const path = require('path');

//W3SCHOOL
const http = require('http') 
http.createServer(function (req, res) {
  console.log(req.url)
  if(req.url === "/") {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if(req.url ==="/about") {
    fs.readFile('about/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (req.url ==="/blog") {
    fs.readFile('blog/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  } else if (req.url ==="/contact") {
    fs.readFile('contact/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
}).listen(8080);
