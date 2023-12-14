const express = require('express');
const app = express();
const path = require('path');

//app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/Folder-1', (req, res) => {
    res.sendFile(path.join(__dirname, 'Folder-1', 'index1.html'));
})

app.get('/Folder-2', (req, res) => {
    res.sendFile(path.join(__dirname, 'Folder-2', 'index2.html'));
})

//Solve .gitignore issue