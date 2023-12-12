const http = require('http') 
const server = http.createServer()

server.on("request", (request, response) => {
    console.log("A request has been made");
})

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})