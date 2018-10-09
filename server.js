const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.listen(port, () => {
	console.log('listening on port ' + port);
})

const Pokemon = require('./pokemon');

console.log(Pokemon);

app.get('/pokemon', (req, res) => {
	res.send(Pokemon);
})