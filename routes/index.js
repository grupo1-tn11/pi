const express = require('express')
const router = express.Router()
const indexController = require('../controllers/indexController')
const authController = require('../controllers/authController')

const locals = require('../middlewares/locals')
const autenticar = require('../middlewares/autenticar')

/* GET home page. */
router.get('/', locals, indexController.index)
router.get('/logout', autenticar.seLogadoNext, authController.logout)
router.get('/search', indexController.busca)

module.exports = router
