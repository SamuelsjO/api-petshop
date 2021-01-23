const roteador = require('express').Router()

roteador.use('/', async (requisicao, resposta) => {
    resposta.send('ok')
})

module.exports = roteador