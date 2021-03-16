const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const verificaAutenticacao = require('../middlewares/auth')
const verificaLocals = require('../middlewares/locals')
const autenticar = require('../middlewares/autenticar')

/* GET home page. */
router.get("/", autenticar.seLogadoNext, indexController.index);
router.get('/logout', autenticar.seLogadoNext, indexController.logout)

module.exports = router;
