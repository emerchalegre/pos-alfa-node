var express = require('express')
var router = express.Router()
const PokemonModel = require('./../models/pokemon')
/*const mongoose = require('mongoose')
const Schema = mongoose.Schema
const _schema = {
	name: String,
	attack: Number,
	defense: Number
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', pokemonSchema);*/

router.get('/', (req, res, next) => {
	PokemonModel.find({}, function(err, data) {
		if(err) throw new Error(err)
			res.json(data)
	})
})

router.get('/:id', (req, res, next) => {
	query = {_id: req.params.id}
	PokemonModel.findOne(query, function(err, data) {
		if(err) throw new Error(err)
			res.json(data)
	})
})

router.put('/:id', (req, res, next) => {
	query = {_id: req.params.id}
	let mod = req.body;
	PokemonModel.update(query, mod, (err, data) => {
		if(err) throw new Error(err)
			res.json(data)
	})
})

router.delete('/:id', (req, res, next) => {
	query = {_id: req.params.id}
	PokemonModel.remove(query, (err, data) => {
	  if(err) throw new Error(err)
			res.json(data)
	})
})

router.post('/', (req, res, next) => {
	let mod = req.body
	PokemonModel.create(mod, function(err, data) {
		if(err) throw new Error(err)
			res.json(data)
	});
})


module.exports = router;