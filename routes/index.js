var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");
const verificaAutenticacao = require('../middlewares/auth')

/* GET home page. */
router.get("/", indexController.index);
router.get('/logout', verificaAutenticacao, indexController.logout)

module.exports = router;
