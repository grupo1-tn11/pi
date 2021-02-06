const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController.js')

/* GET home page. */
router.get('/', indexController.index)
router.get('/login', indexController.login)
router.get('/cadastro', indexController.cadastro)
router.get('/logado', indexController.logado)
router.get('/pesquisar', indexController.pesquisar)

module.exports = router
