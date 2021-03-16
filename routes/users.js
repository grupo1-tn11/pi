const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/cadastrar", userController.exibir);
router.post("/cadastrar", userController.armazenar);
router.get("/ver/:id", userController.encontrar);
router.put("/editar/:id", userController.atualizar);
router.delete("/deletar/:id", userController.deletar);

module.exports = router;
