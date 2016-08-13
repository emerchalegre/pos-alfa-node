var express = require('express')
var router = express.Router()
const CRUD = require('./crud')

router.get('/', CRUD.find)

//router.get('/:id', Controller.findOne)

//router.put('/:id', Controller.update)

//router.delete('/:id', Controller.remove)

router.post('/', CRUD.create)

module.exports = router;