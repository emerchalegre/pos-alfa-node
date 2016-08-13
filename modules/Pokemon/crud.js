'use strict';

const Controller = require('./controller');

const CRUD = {
  create:  (req, res) => {
		let mod = req.body
		let cb = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.create(mod, cb)
	},
	find: (req, res) => {
		let query = {}
		let cb = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.find(query, cb)
	},
	remove: (req, res) => {
		let query = {_id: req.params.id}
		let cb = (err, data) => {
			if(err) throw new Error(err)
				res.json(data)
		}
		Controller.remove(query, cb)
	}
};

module.exports = CRUD;