const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const testController = require('../controllers/testController');
const loggedController = require('../controllers/loggedController')
const notLogged = require('../middlewares/notLogged')
const isLogged = require('../middlewares/isLogged')


// Se usuário não-logado, indexController
router.get('/', notLogged, indexController.index)
router.get('/login', notLogged, indexController.login)
router.get('/cadastro', notLogged, indexController.cadastro)


router.get('/test', testController.test)

module.exports = router
