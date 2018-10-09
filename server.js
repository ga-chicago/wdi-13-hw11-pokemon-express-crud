
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

// SET PORT
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});

// TEST RUN
app.get('/', (req, res) => {
	res.send("Server responding to get request from pokemon app");
});


app.get('/pokemon', (req, res) => {
	res.send(Pokemon);
})