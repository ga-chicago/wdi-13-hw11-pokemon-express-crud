const express = require('express');
const app 	  = express();

app.use(express.static('public'))

// app.get('/pokemon', (req, res) => {
// 	res.send(Pokemon)
// })
const Pokemon = require('./models/pokemon')



app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		Pokemon
	});
});

app.listen(3000, () => {
	console.log('server is listening, on port 3000');
	console.log(Pokemon);
})