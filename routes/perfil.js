const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')
const locals = require('../middlewares/locals')

router.get('/:id', locals, perfilController.exibir)


module.exports = router