//START DAY 2
//PATH AND FS
const fs = require('fs');
const path = require('path');

//CREATE SERVER
const http = require('http') 
const server = http.createServer()

//CREATE RESPONSE
server.on("request", (request, response) => {
  console.log(request.url);
  if(request.url !== " ") {
    console.log(path.dirname(__filename));
  }
  response.end();
})

//LISTEN TO SERVER RESPONSE
server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})

/*
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.join(__dirname, "test", "hello.html"));
*/