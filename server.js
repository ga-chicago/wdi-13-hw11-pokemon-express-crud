const express = require('express');
const app 	  = express();

app.use(express.static('public'))

// app.get('/pokemon', (req, res) => {
// 	res.send(Pokemon)
// })
const Pokemon = require('./models/pokemon')

//One step ahead I guess...

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		Pokemon
	});
});

app.get('/pokemon/:index', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index]
	});
});

app.listen(3000, () => {
	console.log('server is listening, on port 3000');
	console.log(Pokemon);
})