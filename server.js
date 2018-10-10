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
app.use(express.static('public'));

//index route
app.get('/pokemon', (req,res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})

//show route
app.get('/pokemon/:id', (req,res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
})