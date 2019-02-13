const express = require('express');
const proxy = require('http-proxy-middleware')
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const api = process.env.SERVER || 'http://127.0.0.1:8080';

//Static file declaration
app.use(express.static(path.join(__dirname, 'build')));

var apiProxy = proxy('/api/**', { 
    target: api,
    pathRewrite: {
      '^/api/': '/'
    }
});
app.use(apiProxy)

//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})