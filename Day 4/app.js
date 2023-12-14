//IMPORT COLLECTION
import dishes from './dishes.js';

//IMPORT EXPRESS MODULE AND DEFINE APP.JS AS MAIN APPLICATION
import express from "express";
const app = express();

//TELL COMPUTER HOW TO HANDLE UPCOMING INFORMATION
app.use(express.json());

//SEND AN OK MESSAGE ON ROOT LEVEL
app.get("/", (req, res) => {
    res.send({code: 200, msg:"OK"})
})

//FETCH DATA FROM DISHES.JS
app.get("/dishes", (req, res) => {
    res.send(dishes);
})

//TARGET SPECIFIC VALUE FROM DISHES.JS
app.get("/dishes/:ingredients", (req, res) => {
    console.log(req.params.ingredients);
})

//DEFINE PORT AND LISTEN
app.listen(3000, () => {
    console.log("Running on http://localhost:3000")
});