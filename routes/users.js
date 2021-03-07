const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/store', userController.store)
router.post('/auth', userController.auth)
router.get('/logout', userController.logout)

module.exports = router