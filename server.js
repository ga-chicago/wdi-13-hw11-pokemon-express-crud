const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pokemonController = require('./controllers/pokemon');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use('/pokemon', pokemonController);
app.use(express.static('public'));

app.get('/',(req, res) => {
	res.send('This is the server responding to a get request')
})

app.listen(3000, () => {
	console.log('server is listening on port 3000');
})