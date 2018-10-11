const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Pokemon = require('./pokemon');
const methodOverride = require('method-override');


app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());

// app.get('/', (req, res)=>{
// 	res.send('This is my pokemon app')
// });

app.get('/pokemon', (req, res) => {
    // res.send(Pokemon)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
    
});

app.get('/pokemon/:id/edit', (req, res) => {
  res.render('edit.ejs', {
    pokemon: pokemon[req.params.id],
    i: req.params.index
  });
});


app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon');
})

app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs')
})



app.get('/pokemon/:id', (req, res)=>{
	res.render('show.ejs', {
		pokemon:Pokemon[req.params.id]
	});
});

app.delete('/pokemon/:id', (req, res)=>{
  Pokemon.splice(req.params.id, 1)
  res.redirect('/pokemon');
});

app.get('/pokemon', (req,res)=>{
	res.send('pokemon', {
		pokemon:Pokemon
	});
});


app.listen(3000, ()=>{
	console.log('listening on port 3000');
});