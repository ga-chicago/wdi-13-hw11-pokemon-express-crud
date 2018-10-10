const express = require('express');
const app = express();
const Pokemon = require('./pokemon');

app.use('/assets', express.static('assets'));

app.get('/', (req, res)=>{
	res.send('This is my pokemon app')
});

app.get('/pokemon', (req, res) => {
    // res.send(Pokemon)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
    
});

app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs')
})

app.get('/pokemon/:id', (req, res)=>{
	res.render('show.ejs', {
		pokemon:Pokemon[req.params.id]
	});
});

// app.get('/pokemon', (req,res)=>{
// 	res.send('pokemon', {
// 		pokemon:Pokemon
// 	});
// });

app.listen(3000, ()=>{
	console.log('listening on port 3000');
});