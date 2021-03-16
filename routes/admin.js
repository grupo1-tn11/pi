const express = require("express");
const router = express.Router();

const adminController = require('../controllers/adminController')

router.get('/', adminController.index);
router.get('/usuarios', adminController.usuarios)

module.exports = router;