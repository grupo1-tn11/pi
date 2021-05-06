const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')
const apiController = require('../controllers/apiController')

router.get('/', adminController.index)

//Usuarios
router.get('/usuarios', adminController.usuarios)
router.get('/usuarios/inserir', adminController.viewUsuario)
router.post('/usuarios/inserir', adminController.inserirUsuario)
router.get('/usuarios/ver/:id', adminController.verUsuario)
router.get('/usuarios/editar/:id', adminController.editarUsuario)
router.put('/usuarios/editar/:id', adminController.atualizarUsuario)
router.get('/usuarios/excluir/:id', adminController.excluirUsuario)
router.delete('/usuarios/excluir/:id', adminController.excluirUsuario)

//Redes sociais
router.get('/redessociais', adminController.redessociais)
router.get('/redessociais/inserir', adminController.viewRedesSociais)
router.post('/redessociais/inserir', adminController.inserirRedesSociais)
router.get('/redessociais/ver/:id', adminController.verRedesSociais)
router.get('/redessociais/editar/:id', adminController.editarRedesSociais)
router.put('/redessociais/editar/:id', adminController.atualizarRedesSociais)
router.get('/redessociais/excluir/:id', adminController.excluirRedesSociais)
router.delete('/redessociais/excluir/:id', adminController.excluirRedesSociais)

//Linguagens
router.get('/linguagens', adminController.linguagens)
router.get('/linguagens/inserir', adminController.viewLinguagens)
router.post('/linguagens/inserir', adminController.inserirLinguagens)
router.get('/linguagens/ver/:id', adminController.verLinguagem)
router.get('/linguagens/editar/:id', adminController.editarLinguagem)
router.put('/linguagens/editar/:id', adminController.atualizarLinguagem)
router.get('/linguagens/excluir/:id', adminController.excluirLinguagem)
router.delete('/linguagens/excluir/:id', adminController.excluirLinguagem)

// API
router.get('/api/linguagens', apiController.linguagens)
router.get('/api/redes', apiController.redes)
router.get('/api/usuario', apiController.usuario)

module.exports = router
