const express = require('express')
const { route } = require('./server')
const Livraria = require('../api/livrariaService')

module.exports = function(server){
    const router = express.Router()
    server.use('/api',router)

    const LivrariService = require('../api/livrariaService')
    LivrariService.register(router,'/livraria')
}