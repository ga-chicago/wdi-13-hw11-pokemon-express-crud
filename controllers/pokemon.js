const express = require('express');
const router = express.Router()

const Pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
	res.render('index.ejs', {
		Pokemon
	});
});

router.get('/new', (req, res) => {
	res.render('new.ejs')
	Pokemon
})

router.post('/', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon')
	Pokemon
	console.log(Pokemon);
})

router.get('/:index', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.index],
		index: req.params.index
	});
});

router.get('/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.index],
		index: req.params.index
	})	
})


router.delete('/:index', (req, res) => {
	Pokemon.splice(req.params.index, 1);
	res.redirect('/pokemon')	
})

router.put('/:index', (req, res) => {
	Pokemon[req.params.index] = req.body;
	res.redirect('/pokemon')	
})


module.exports = router



