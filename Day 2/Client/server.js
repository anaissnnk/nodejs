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
  if(request.url === "/") {
    console.log(path.join(__dirname, "index.html"));
  }
  response.end();
})

//LISTEN TO SERVER RESPONSE
server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})