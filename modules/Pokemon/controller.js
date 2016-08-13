'use strict'
const Model = require('./model')

const Controller = {
	create: function(data, callback) {
		Model.create(data, callback)
	},
	find: function(query, callback) {
		Model.find(query, callback)
	},
	remove: (query, callback) => {
		Model.remove(query, callback)
	},
	update: (query, callback) => {
		Model.update(query, callback)
	},
	findOne: function(query, callback) {
		Model.findOne(query, callback)
	}
}

module.exports = Controller