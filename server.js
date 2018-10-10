const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.listen(port, () => {
	console.log('listening on port ' + port);
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

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

app.get('/pokemon/:index', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index]
	})
})









































































