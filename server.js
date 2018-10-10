const express = require('express');
const app = express();
const Pokemon = require('./pokemon');

app.get('/', (req, res)=>{
	res.send('This is my pokemon app')
});

app.get('/pokemon', (req, res) => {
    // res.send(Pokemon)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
    
});






app.get('localhost:3000/pokemon', (req,res)=>{
	res.send('pokemon', {
		pokemon:Pokemon
	});
});














app.listen(3000, ()=>{
	console.log('listening on port 3000');
});