var express = require("express");
var router = express.Router();

const authController = require('../controllers/authController')
const bloqueioLogin = require('../middlewares/bloqueiologin')

router.get('/', bloqueioLogin, authController.login);
router.post('/', authController.autenticar)

module.exports = router;