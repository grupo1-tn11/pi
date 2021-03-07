const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const testController = require('../controllers/testController');
const islogged = require('../middlewares/islogged')

/* GET home page. */
router.get('/', islogged.toIndex, indexController.index)
router.get('/pesquisar', indexController.pesquisar)
router.get('/prestador', indexController.prestador)
router.get('/resumo', indexController.resumo)
router.get('/login', indexController.login)
router.get('/cadastro', indexController.cadastro)


router.get('/test', testController.test)

module.exports = router
