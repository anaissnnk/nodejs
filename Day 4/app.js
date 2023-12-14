//TODO: add a "info" page that explains how to use the API

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

// //FETCH DATA FROM DISHES.JS
app.get("/dishes", (req, res) => {
    const dishNames = dishes.map(dish => dish.name);
    res.send("Heya, here you will find recipes for the following dishes: " + dishNames);
})

app.get("/dishes/:name", (req, res) => {
    const dish = dishes.find(dish => dish.name.toLowerCase() === req.params.name.toLowerCase());
    if (dish) {
        res.send(dish);
    } else {
        res.status(404).send("Dish not found. Check for typos!");
    }
});

//DEFINE PORT AND LISTEN
app.listen(3000, () => {
    console.log("Running on http://localhost:3000")
});

//DRY CODE
// app.get("/dishes/matcha-brownies", (req, res) => {
//     const dish = dishes.find(dish => dish.name === "Matcha Brownies")
//     res.send(dish)
// })

//TARGET SPECIFIC VALUE FROM DISHES.JS
// app.get("/dishes/:id", (req, res) => {
//     const dish = dishes.find(dish => dish.id === parseInt(req.params.id))
//     res.send(dish)
// })

//APP.POST
// app.post("/dishes/chocolate-cake", (req, res) => {
//     const newDish = {
//         name: req.body.name,
//         timeToPrepare: req.body.timeToPrepare,
//         ingredients: req.body.ingredients,
//         "list of steps": req.body.steps,
//     }
//     dishes.push(newDish);
//     res.status(200).send(dishes)
// })

//POST TEST
// app.get("/dishes/test6", (req, res) => {
//     const dish = dishes.find(dish => dish.name === "test6")
//     res.send(dish)
// })

// //CREATING NEW LIST TO PUSH WITH PREDETERMINED PARAMETERS
// app.post("/dishes/test6", (req, res) => {
//     const newDish = {
//         name: req.body.name,
//         timeToPrepare: req.body.timeToPrepare,
//         ingredients: req.body.ingredients,
//         "list of steps": req.body.steps,
//     }
//     dishes.push(newDish);
//     res.status(200).send(dishes)
// })
