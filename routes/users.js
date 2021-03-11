const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const authController = require('../controllers/authController')

router.post('/store', usersController.store)
router.post('/auth', authController.login)
router.get('/logout', authController.logout)

module.exports = router