const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

//Static file declaration
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req, res) => {
    res.json({
        server: process.env.SERVER || 'http://localhost:8080'
    });
});

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})