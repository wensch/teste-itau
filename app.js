let express = require('express')
let app = express()
let path = require("path")

app.use(express.static(__dirname + '/dist'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

console.log('Servidor rodando em http://localhost:3000');

app.listen(2122);
module.exports = app;