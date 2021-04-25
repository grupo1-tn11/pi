const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')
const apiController = require('../controllers/apiController')

router.get('/', adminController.index)
router.get('/usuarios', adminController.usuarios)
 router.get('/usuarios/ver/:id', adminController.verUsuario)
router.get('/usuarios/editar/:id', adminController.editarUsuario)
router.post('/usuarios/editar/:id', adminController.atualizarUsuario)
router.get('/redessociais', adminController.redessociais)
router.get('/linguagens', adminController.linguagens)
router.get('/competencias', adminController.competencias)
router.get('/api/linguagens', apiController.linguagens)
router.get('/api/redes', apiController.redes)
router.get('/api/usuario', apiController.usuario)

module.exports = router
