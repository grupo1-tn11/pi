const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const usersController = require('../controllers/usersController')
const authcontroller = require('../controllers/authController')
const testController = require('../controllers/testController');
const auth = require('../middlewares/auth')

router.get('/', auth.notLogged, indexController.index)
router.get('/login', auth.notLogged, authcontroller.create)
router.get('/cadastro', auth.notLogged, usersController.create)
router.get('/logado', auth.isLogged, indexController.loggedIndex)

router.get('/test', testController.test)

module.exports = router
