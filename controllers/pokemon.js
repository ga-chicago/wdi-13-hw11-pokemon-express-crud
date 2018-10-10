const express = require('express');
const router = express.Router();

const Pokemon = require('../models/pokemon');

//index route
router.get('/', (req,res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})

//show route
router.get('/:id', (req,res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
})

module.exports = router;