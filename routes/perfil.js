const express = require('express')
const router = express.Router()
const perfilController = require('../controllers/perfilController')
const portifolioController = require('../controllers/portifolioController')
const locals = require('../middlewares/locals')
const autenticar = require('../middlewares/autenticar')
const multer = require('multer')
const path = require('path')
// const uploads = require('../configs/uploads')
// const upload = multer()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads','arquivos'))
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname)
        let fileName = String(Date.now()) + ext
        cb(null, fileName)
    }
  })
   
var upload = multer({ storage: storage })



router.get('/editar', autenticar.seLogadoNext, perfilController.editar)
// router.put('/editar', uploads.curriculo.single('curriculo'), uploads.foto.single('foto'), perfilController.atualizar)
router.put('/editar',  upload.fields(
[
{ name: 'foto', maxCount: 1}, 
{ name: 'curriculo', maxCount: 1}
]
), perfilController.atualizar)

router.get('/:id', locals, perfilController.exibir)
router.get('/', autenticar.seLogadoNext, perfilController.exibir)
router.get('/:id/portifolio', locals, portifolioController.exibir)
// router.get('/editar/portifolio', autenticar.seLogadoNext, portifolioController.editar)


module.exports = router