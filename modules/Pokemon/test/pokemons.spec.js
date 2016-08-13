require('./../../../db/config.test')
const assert = require('assert')
const Controller = require('./../controller')

describe('Pokemon module', () => {
	
	before( (done) => {
		Controller.remove({}, (err, data) => done())
	})

	const msg1 = 'Quando iniciamos sem pokemons o FIND deve vir vazio' 
	describe(msg1, () => {
		it('Deve retornar um array VAZIO', (done) => {
			let query = {}
			let callback = (err, data) => {
				assert.equal(null, err, 'Erro não é nulo')
				assert.equal([].length, data.length, 'Lista veio vazia')
				done()
			}
			Controller.find(query, callback)
			
		})
	})

	const msg2 = 'Create' 
	describe(msg2, () => {
		it('No CREATE o retorno dever ser o mesmo objeto enviado, adicionado _id ', (done) => {
			let mod = {
				name: "TESTE",
				attack: 9001,
				defense: 8001
			}
			let callback = (err, data) => {
				assert.equal(null, err, 'Erro não é null')
				assert.equal('object', typeof data._id)
				assert.equal('object', typeof data._id)
				assert.equal('TESTE', data.name)
				assert.equal('9001', data.attack)
				assert.equal('8001', data.defense)
				done()
			}
			Controller.create(mod, callback)
		})
	})

	const msg3 = 'Update' 
	describe(msg3, () => {
		it('No UPDATE o retorno deve ser as linhas afetadas', (done) => {
			let mod = {
				name: "TESTE",
				attack: 9001,
				defense: 1001
			}
			let callback = (err, data) => {
				assert.equal(null, err, 'Erro não é nulo')
				assert.equal(true, (typeof data.ok)=='number' && data.ok > 0, 'Update correto')
				done()
			}
			Controller.update(mod, callback)
		})
	})


	const msg4 = 'findOne' 
	describe(msg4, () => {
		it('Deve retornar um array VAZIO', (done) => {
			let query = {
				name: "TESTE"
			}
			let callback = (err, data) => {
				assert.equal(null, err, 'Erro não é nulo')
				assert.equal(query.name, data.name, "Nome é diferente")
				done()
			}
			Controller.findOne(query, callback)
			
		})
	})

	const msg5 = 'Remove' 
	describe(msg5, () => {
		it('No REMOVE o retorno deve ser as linhas afetadas', (done) => {
			let mod = {
				name: "TESTE"
			}
			let callback = (err, data) => {
				assert.equal(null, err, 'Erro não é nulo')
				assert.equal(true, (typeof data.result.ok)=='number' && data.result.ok > 0, 'Exclusão correto')
				done()
			}
			Controller.remove(mod, callback)
		})
	})
})