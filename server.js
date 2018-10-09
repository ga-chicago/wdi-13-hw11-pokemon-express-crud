const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const Pokemon = require('./model/pokemon')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
//HOME PAGE ROUTE
app.get('/', (req, res) => {
	res.send('POKEMON HOME')
});
//POKEMON ROUTE
app.get('/pokemon', (req, res) => {
	res.send(Pokemon)
	
});




































app.listen(3000, () => {
	const today = new Date();
    console.log(
        today.toLocaleDateString('en-US') + ", " +
        today.toLocaleTimeString('en-US'))
	console.log('the Pokemon server is running on port 3000')
})