const http = require('http') 
const server = http.createServer()

server.on("request", (request, response) => {
    console.log(request.url);
    if(request.url === "/") {
        console.log("homepage")
        response.end();
    }
    if(request.url !== "/") {
        console.log("other pages")
        response.end();
    }
})

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})