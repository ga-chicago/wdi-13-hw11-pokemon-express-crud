const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Pokemon = require('./models/pokemon');
const methodOverride = require('method-override');

// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

// app.get('/', (req, res)=>{
// 	res.send('This is my pokemon app')
// });

// the index
app.get('/pokemon', (req, res) => {
    // res.send(Pokemon)
    res.render('index.ejs', {
        pokemon: Pokemon
    })
    
});

//make a new pokemon
app.get('/pokemon/new', (req, res) => {
	res.render('new.ejs')
})

// editing a pokemon
app.get('/pokemon/:id/edit', (req, res) => {
  console.log(req.params.id);
  res.render('edit.ejs', {

    pokemon: Pokemon[req.params.id],
    id: req.params.id
  });
});


// show page
app.get('/pokemon/:id', (req, res)=>{
	res.render('show.ejs', {
		pokemon:Pokemon[req.params.id]
	});
});

//create route
app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon');
})


app.delete('/pokemon/:id', (req, res)=>{
  Pokemon.splice(req.params.id, 1)
  res.redirect('/pokemon');
});


app.put('pokemon/:id', (req, res) => {
  Pokemon[req.params.id] = req.body;
  res.redirect('/pokemon')
})
//there's something wrong with my put route. no matter what i do, it's either 'i' isn't defined or property of 'name' is undefined anytime i put my edit button on my show page. You can manually go to the pokemon/:id/edit page and you can change stuff up in the forms then it says CANNOT PUT something something. I cant figure it out and it's super frustrating.

// app.get('/pokemon', (req,res)=>{
// 	res.send('pokemon', {
// 		pokemon:Pokemon
// 	});
// });


app.listen(3000, ()=>{
	console.log('listening on port 3000');
});