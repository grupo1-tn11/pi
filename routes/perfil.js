const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')
const portifolioController = require('../controllers/portifolioController')
const locals = require('../middlewares/locals')
const autenticar = require('../middlewares/autenticar')



router.get('/editar', autenticar.seLogadoNext, perfilController.editar)
router.get('/:id', locals, perfilController.exibir)
router.get('/', autenticar.seLogadoNext, perfilController.exibir)
router.get('/:id/portifolio', locals, portifolioController.exibir)
// router.get('/editar/portifolio', autenticar.seLogadoNext, portifolioController.editar)
router.post('/editar', perfilController.atualizar)


module.exports = router