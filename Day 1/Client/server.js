const fs = require('fs');
const path = require('path');

//creating main html
try {
    const filePath = path.join(__dirname, "index.html");

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//create main css
try {
    const filePath = path.join(__dirname, "style.css");

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");
  
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//create contact folder
try {
    fs.mkdirSync(path.join(__dirname, "contact"));
  
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }

//create about folder
try {
    fs.mkdirSync(path.join(__dirname, "about"));
  
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }

//create blog folder
try {
    fs.mkdirSync(path.join(__dirname, "blog"));
  
  } catch (err) {
    console.error("Error code :", err.code);
    console.error(err.message);
  }


//creating about html
try {
    const filePath = path.join(__dirname, "about", "index.html");
    

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating blog html
try {
    const filePath = path.join(__dirname, "blog", "index.html");

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating contact html
try {
    const filePath = path.join(__dirname, "contact", "index.html");

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating about css
try {
    const filePath = path.join(__dirname, "about", "style.css");
    

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating blog css
try {
    const filePath = path.join(__dirname, "blog", "style.css");

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating contact css
try {
    const filePath = path.join(__dirname, "contact", "style.css");

    fs.writeFileSync(filePath, "Hello World!");
    fs.appendFileSync(filePath, " I love Node JS");

  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}