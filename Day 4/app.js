//IMPORT EXPRESS MODULE AND DEFINE APP.JS AS MAIN APPLICATION
const express = require('express');
const app = express();

//TELL COMPUTER HOW TO HANDLE UPCOMING INFORMATION
app.use(express.json());

//SEND AN OK MESSAGE ON ROOT LEVEL
app.get("/", (req, res) => {
    res.send({code: 200, msg:"OK"})
})

//DEFINE PORT AND LISTEN
app.listen(3000, () => {
    console.log("Running on http://localhost:3000")
});