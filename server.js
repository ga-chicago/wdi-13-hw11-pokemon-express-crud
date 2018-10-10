const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const pokemonController = require('./controllers/pokemon')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/assets', express.static('assets'));
//HOME PAGE ROUTE

app.use('/pokemon', pokemonController)

app.listen(3000, () => {
	const today = new Date();
    console.log(
        today.toLocaleDateString('en-US') + ", " +
        today.toLocaleTimeString('en-US'))
	console.log('the Pokemon server is running on port 3000')
})