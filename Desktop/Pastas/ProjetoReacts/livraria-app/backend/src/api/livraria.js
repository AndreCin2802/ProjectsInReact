const restful = require('node-restful')
const mongoose = restful.mongoose
const LivrariSchema = new mongoose.Schema({
    name: {type: String, required: true},
    author: {type: String, required:true},
    pages: {type: Number, required: true},
    read: {type: Boolean, required: true, default: false}
})

module.exports = restful.model('Livraria',LivrariSchema)