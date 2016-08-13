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
	}
}

module.exports = Controller