const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Pokemon = require('./model/pokemon')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/assets', express.static('assets'));
//HOME PAGE ROUTE
app.get('/', (req, res) => {
	res.send('POKEMON HOME')
});
//INDEX ROUTE
app.get('/pokemon', (req, res) => {
	// res.send(Pokemon)
	res.render('index.ejs', {
		pokemon: Pokemon
	})
});
//POST NEW ROUTE
app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body)
	res.redirect('/pokemon')
})
//NEW ROUTE
app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs')
});
//EDIT ROUTE
app.get('/pokemon/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id
	})
});
//SHOW ROUTE
app.get('/pokemon/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
});

app.delete('/pokemon/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon')
})

app.put('/pokemon/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon')
})





























app.listen(3000, () => {
	const today = new Date();
    console.log(
        today.toLocaleDateString('en-US') + ", " +
        today.toLocaleTimeString('en-US'))
	console.log('the Pokemon server is running on port 3000')
})