const fs = require('fs');
const path = require('path');

//creating main html
try {
    const filePath = path.join(__dirname, "index.html");

    fs.writeFileSync(filePath, "Hello World!");

    fs.appendFileSync(filePath, " I love Node JS");

    console.log("HTML file created successfully.");
  
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//create main css
try {
    const filePath = path.join(__dirname, "style.css");

    fs.writeFileSync(filePath, "Hello World!");

    fs.appendFileSync(filePath, " I love Node JS");

    console.log("CSS file created successfully.");
  
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}