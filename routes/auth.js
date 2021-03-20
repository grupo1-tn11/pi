const express = require("express");
const router = express.Router();

const authController = require('../controllers/authController')
const autenticar = require('../middlewares/autenticar')

router.get('/', autenticar.naoLogadoNext, authController.login);
router.post('/', authController.autenticar)

module.exports = router;