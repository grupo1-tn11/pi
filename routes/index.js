var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");
const userController = require("../controllers/userController");
const languageController = require("../controllers/languageController");

/* GET home page. */
router.get("/", indexController);
router.get("/usuario/cadastrar", userController.telaCadastro);
router.post("/usuario/cadastrar", userController.criar);
router.get("/usuario/ver/:id", userController.encontrar);
router.put("/usuario/editar/:id", userController.atualizar);
router.delete("/usuario/deletar/:id", userController.deletar);
router.post("/linguagem/cadastrar", languageController.criar);
router.get("/linguagem/ver/:id", languageController.encontrar);
router.put("/linguagem/editar/:id", languageController.atualizar);
router.delete("/linguagem/deletar/:id", languageController.deletar);

module.exports = router;
