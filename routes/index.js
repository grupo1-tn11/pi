var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");
const verificaAutenticacao = require('../middlewares/auth')
const verificaLocals = require('../middlewares/locals')

/* GET home page. */
router.get("/", verificaLocals, indexController.index);
router.get('/logout', verificaAutenticacao, indexController.logout)

module.exports = router;
