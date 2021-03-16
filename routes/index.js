const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");
const verificaAutenticacao = require('../middlewares/auth')
const locals = require('../middlewares/locals')
const autenticar = require('../middlewares/autenticar')

/* GET home page. */
router.get("/", locals, indexController.index);
router.get('/logout', autenticar.seLogadoNext, indexController.logout)

module.exports = router;
