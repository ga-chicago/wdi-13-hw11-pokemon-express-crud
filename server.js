// -------------------- SETUP -------------------- //

const express = require('express');

const methodOverride = require('method-override');

const app = express();

const bodyParser = require('body-parser');

// Always capitalize Model
const Pokemon = require('./pokemon.js');

// Setting up middleWare
// MiddleWare ==> functions happening synchronously in request from client on server
// Happens before any listeners
app.use(bodyParser.urlencoded({extended: false}));

// Use methodOverride. Add query parameter to delete form named _method
// ?_method HERE IS A QUERY STRING
app.use(methodOverride('_method'));

// Add CSS through 'public' directory
app.use(express.static('public'));



// -------------------- LISTENERS -------------------- //

// SET PORT
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});

// TEST RUN
app.get('/', (req, res) => {
	res.send("Server responding to get request from pokemon app");
});

// Index Route
app.get('/pokemon', (req, res) => {
	// res.send(Pokemon);
	res.render('index.ejs', {
		Pokemon
	});
});


// Show Route
app.get('/pokemon/:id', (req, res) => {

	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id
	})
})


















