const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const upload = require('../configs/uploads')
const autenticar = require('../middlewares/autenticar')

router.get('/cadastrar', autenticar.naoLogadoNext, userController.exibir)
router.post('/cadastrar', upload.foto.single('foto'), userController.armazenar)
// router.get('/ver/:id', userController.encontrar)
// router.put('/editar', userController.atualizar)
router.delete('/deletar/:id', userController.deletar)

module.exports = router
