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

	// const msg3 = 'Update' 
	// describe(msg2, () => {
	// 	it('No CREATE o retorno dever ser o mesmo objeto enviado, adicionado _id ', () => {
	// 		let mod = {
	// 			name: "TESTE",
	// 			attack: 9001,
	// 			defense: 8001
	// 		}
	// 		let callback = (err, data) => {
	// 			assert.equal(mod.hasOwnProperty("_id"), data, 'Cadastro correto')
	// 		}
	// 		Controller.create(mod, callback)
	// 	})
	// })

	// const msg4 = 'Remove' 
	// describe(msg2, () => {
	// 	it('No CREATE o retorno dever ser o mesmo objeto enviado, adicionado _id ', () => {
	// 		let mod = {
	// 			name: "TESTE",
	// 			attack: 9001,
	// 			defense: 8001
	// 		}
	// 		let callback = (err, data) => {
	// 			assert.equal(mod.hasOwnProperty("_id"), data, 'Cadastro correto')
	// 		}
	// 		Controller.create(mod, callback)
	// 	})
	// })
})