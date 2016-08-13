'use strict';

const Controller = require('./controller');

const CRUD = {
  create:  (req, res) => {
		let mod = req.body
		let callback = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.create(mod, callback)
	},
	find: (req, res) => {
		let query = {}
		let callback = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.find(query, callback)
	},
	remove: (req, res) => {
		let query = {_id: req.params.id}
		let callback = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.remove(query, callback)
	},
	update: (req, res) => {
		query = {} || {_id: req.params.id}
		let mod = {} || req.body;

		let cb = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}

		Controller.update(query, mod, cb)
	},
	findOne: (req, res) => {
		let query = {} || req.params
		console.log(query)
		let cb = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.find(query, cb)
	}
};

module.exports = CRUD;