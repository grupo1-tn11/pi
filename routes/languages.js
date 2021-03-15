var express = require("express");
var router = express.Router();
const languageController = require("../controllers/languageController");

router.post("/cadastrar", languageController.criar);
router.get("/ver/:id", languageController.encontrar);
router.put("/editar/:id", languageController.atualizar);
router.delete("/deletar/:id", languageController.deletar);

module.exports = router;