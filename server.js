const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.listen(port, () => {
	console.log('listening on port ' + port);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

const Pokemon = require('./pokemon');

app.use(express.static('CSS'));

console.log(Pokemon);


/*************************************************************************

Instead of displaying json at your /pokemon route, you should serve an index.ejs file that displays a list of all the pokemon. Put the pokemon inside a <ul> with class name pokemon.

Add some style to your list with a style tag, or, for an added challenge, look up how to serve static files in an express app and use a separate css file instead.

Stretch step, not required : Choose a google font and add it to your html and inside your <style> tag

***************************************************************************/

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})

/**************************************************************************

Inside your server.js, add a new get route /pokemon/:id
This route should serve a template called show.ejs which displays the information of a specific pokemon according to their index in the pokemon array. For example, /pokemon/0 should display the 0 indexed pokemon.
You may want to look up how to access route parameters in express.

**************************************************************************/

/*************************
Setting up Post Route
**************************/

app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs', {
		pokemon: Pokemon
	})
})

app.get('/pokemon/:index', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index],
		i: req.params.index
	})
})

/**************************************************************************
Set up routes and templates to allow for full CRUD functionality.

Users should be able to insert a new pokemon into the array using a form on a new.ejs page. Creation should be handled via a POST route to the /pokemon route.
Users should be able to edit an individual pokemon on an edit.ejs page accessed from the /pokemon/:id/edit route. The updating should be handled via a POST request to the /pokemon/:id route.
Users should be able to delete a pokemon using a button provided on the show and index pages.
The final app should have what are known as the 7 RESTful routes.

**************************************************************************/


app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon')
})

app.get('/pokemon/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.index],
		id: req.params.index
	})
})

app.put('/pokemon/:index', (req, res) => {
	res.redirect('/pokemon');
	Pokemon[req.params.index] = req.body;
})

app.delete('/pokemon/:index', (req, res) => {
	Pokemon.splice(req.params.index, 1);
	res.redirect('/pokemon');
})







































































