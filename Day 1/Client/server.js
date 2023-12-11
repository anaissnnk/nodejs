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

//create folders
const foldersToCreate = ["contact", "about", "blog"];
foldersToCreate.forEach(folder => {
  try {
    fs.mkdirSync(path.join(__dirname, folder));
  } catch (err) {
    console.error(`Error creating ${folder} folder:`, err.message);
  }
});