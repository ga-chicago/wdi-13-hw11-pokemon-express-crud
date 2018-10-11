const express = require('express');
const router = express.Router();

const Pokemon = require('../models/pokemon');

//index route
router.get('/', (req,res) => {
	res.render('index.ejs', {
		pokemon: Pokemon
	});
})

//new route
router.get('/new', (req,res) => {
	res.render('new.ejs');
})

//post route
router.post('/',(req,res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon');
})

//show route
router.get('/:id', (req,res) => {
	res.render('show.ejs', {
		pokemon: Pokemon[req.params.id],
		id: req.params.id
	})
})

//delete route
router.delete('/:id', (req,res) => {
  Pokemon.splice(req.params.id,1);
  res.redirect('/pokemon');
})

//edit route
router.get('/:id/edit', (req,res) => {
  res.render('edit.ejs', {
    pokemon: Pokemon[req.params.id],
    index: req.params.id
  })
})

//update route
router.put('/:id', (req,res) => {
  Pokemon[req.params.id] = req.body;
  res.redirect('/pokemon');
})

module.exports = router;