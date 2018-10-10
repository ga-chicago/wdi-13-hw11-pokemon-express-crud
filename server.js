const express = require('express');
const app 	  = express();



const Pokemon = require('./models/pokemon')

app.get('/pokemon', (req, res) => {
	res.send(Pokemon)
})


app.listen(3000, () => {
	console.log('server is listening, on port 3000');
	console.log(Pokemon);
})