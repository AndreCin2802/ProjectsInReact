const Livraria = require('./livraria')

Livraria.methods(['get','post','put','delete'])
Livraria.updateOptions ({new: true, runValidators: true})
module.exports = Livraria
