const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const static = require('serve-static');

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









































































