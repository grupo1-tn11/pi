const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

const autenticar = require('../middlewares/autenticar')

router.get('/cadastrar', autenticar.naoLogadoNext, userController.exibir)
router.post('/cadastrar', userController.armazenar)
router.get('/ver/:id', userController.encontrar)
router.put('/editar/:id', userController.atualizar)
router.delete('/deletar/:id', userController.deletar)

module.exports = router
