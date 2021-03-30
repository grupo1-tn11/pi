const express = require("express");
const router = express.Router();

const adminController = require('../controllers/adminController')

router.get('/', adminController.index);
router.get('/usuarios', adminController.usuarios)
router.get('/usuarios/ver/:id', adminController.verusuario)
router.get('/redessociais', adminController.redessociais)
router.get('/linguagens', adminController.linguagens)
router.get('/competencias', adminController.competencias)

module.exports = router;