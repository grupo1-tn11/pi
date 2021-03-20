const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')
const portifolioController = require('../controllers/portifolioController')
const locals = require('../middlewares/locals')


router.get('/:id', locals, perfilController.exibir)
router.get('/:id/portifolio/', locals, portifolioController.exibir)


module.exports = router