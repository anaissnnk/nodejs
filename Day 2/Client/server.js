const fs = require('fs');
const path = require('path');

//creating main html
try {
  const filePath = path.join(__dirname, "index.html");
  const h1Content = "<h1>This is the main index file</h1>";
  const cssLink = '<link rel="stylesheet" href="style.css">';
  // Construct the full HTML content
  const htmlContent = `<!DOCTYPE html>
      <html>
      <head>
          ${cssLink}
          <title>My Page</title>
      </head>
      <body>
          ${h1Content}
      </body>
      </html>`;
  // Write the entire HTML content to the file
  fs.writeFileSync(filePath, htmlContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//create main css
try {
    const filePath = path.join(__dirname, "style.css");
    const cssContent = `body {
      background-color: red;
    }
    `;
    fs.writeFileSync(filePath, cssContent);
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
    const h1Content = "<h1>This is the about page html file</h1>";
    const cssLink = '<link rel="stylesheet" href="./about/style.css">';
  
    const htmlContent = `<!DOCTYPE html>
        <html>
        <head>
            ${cssLink}
            <title>My Page</title>
        </head>
        <body>
            ${h1Content}
        </body>
        </html>`;
    fs.writeFileSync(filePath, htmlContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating blog html
try {
  const filePath = path.join(__dirname, "blog", "index.html");
  const h1Content = "<h1>This is the blog page html file</h1>";
  const cssLink = '<link rel="stylesheet" href="./blog/style.css">';

  const htmlContent = `<!DOCTYPE html>
      <html>
      <head>
          ${cssLink}
          <title>My Page</title>
      </head>
      <body>
          ${h1Content}
      </body>
      </html>`;
  fs.writeFileSync(filePath, htmlContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating contact html
try {
  const filePath = path.join(__dirname, "contact", "index.html");
  const h1Content = "<h1>This is the contact page html file</h1>";
  const cssLink = '<link rel="stylesheet" href="./contact/style.css">';

  const htmlContent = `<!DOCTYPE html>
      <html>
      <head>
          ${cssLink}
          <title>My Page</title>
      </head>
      <body>
          ${h1Content}
      </body>
      </html>`;
  fs.writeFileSync(filePath, htmlContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating about css
try {
    const filePath = path.join(__dirname, "about", "style.css");    
    const cssContent = `body {
      background-color: blue;
    }
    `;
    fs.writeFileSync(filePath, cssContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating blog css
try {
    const filePath = path.join(__dirname, "blog", "style.css");
    const cssContent = `body {
      background-color: green;
    }
    `;
    fs.writeFileSync(filePath, cssContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//creating contact css
try {
    const filePath = path.join(__dirname, "contact", "style.css");
    const cssContent = `body {
      background-color: yellow;
    }
    `;
    fs.writeFileSync(filePath, cssContent);
  } catch (err) {
    console.error(err.code);
    console.error(err.message);
}

//START DAY 2

//create servers
const http = require('http') 
const server = http.createServer()

server.on("request", (request, response) => {
//
})

server.listen(3000, () => {
    console.log("Server started on http://127.0.0.1:3000");
})