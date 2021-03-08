const express = require('express')
const router = express.Router()
const loggedController = require('../controllers/loggedController')
const isLogged = require('../middlewares/isLogged')

router.get('/', isLogged, loggedController.index)

module.exports = router
