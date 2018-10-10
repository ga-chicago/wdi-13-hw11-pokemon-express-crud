const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Pokemon = require('./pokemon');

const port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//index route
app.get('/pokemon', (req,res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})