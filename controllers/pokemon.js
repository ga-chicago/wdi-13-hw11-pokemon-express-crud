const express = require('express');
const router = express.Router();
const Pokemon = require('../model/pokemon')

//INDEX ROUTE
router.get('/', (req, res) => {
	// res.send(Pokemon)
	res.render('index.ejs', {
		pokemon: Pokemon
	})
});
//POST NEW ROUTE
router.post('/', (req, res) => {
	Pokemon.push(req.body)
	res.redirect('/pokemon')
})
//NEW ROUTE
router.get('/new', (req, res) => {
	res.render('new.ejs')
});
//EDIT ROUTE
router.get('/:id/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id
	})
});
//SHOW ROUTE
router.get('/:id', (req, res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id]
	})
});

router.delete('/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon')
})

router.put('/:id', (req, res) => {
	Pokemon[req.params.id] = req.body;
	res.redirect('/pokemon')
})





module.exports = router;