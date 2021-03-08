const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const testController = require('../controllers/testController');
const notLogged = require('../middlewares/notLogged')

router.get('/', notLogged, indexController.index)
router.get('/login', notLogged, indexController.login)
router.get('/cadastro', notLogged, indexController.cadastro)


router.get('/test', testController.test)

module.exports = router
