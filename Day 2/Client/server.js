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
  }
  
}).listen(8080);

//http://localhost:8080

//CREATE RESPONSE
/*server.on("request", (req, res) => {
  console.log(req.url);
  if(req.url === "/") {
  console.log("This is the root");
  } else if (req.url === "/about") {
    console.log("This is the about folder");
  } else if (req.url === "/blog") {
    console.log("This is the blog folder");
  } else if (req.url === "/contact") {
    console.log("This is the contact folder");
  }
  res.end();
})*/

//LISTEN TO SERVER RESPONSE
/*server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})*/