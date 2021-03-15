var express = require("express");
var router = express.Router();

const authController = require('../controllers/authController')

router.get('/', authController.login);
router.post('/', authController.autenticar)

module.exports = router;