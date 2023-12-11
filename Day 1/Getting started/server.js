const path = require("path");
console.log("Hello World");
console.log("This is a console log from my server.js file");
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);
console.log(path.join(__dirname, "test", "hello.html"));