const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

const bloqueioLogin = require('../middlewares/bloqueiologin')

router.get("/cadastrar", bloqueioLogin, userController.exibir);
router.post("/cadastrar", userController.armazenar);
router.get("/ver/:id", userController.encontrar);
router.put("/editar/:id", userController.atualizar);
router.delete("/deletar/:id", userController.deletar);

module.exports = router;
