const multer = require('multer')
const path = require('path')

function createStorage(dir) {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads', dir))
    },
    filename: function (req, file, cb) {
      let ext = path.extname(file.originalname)
      let fileName = String(Date.now()) + ext
      cb(null, fileName)
    }
  })
}

const storageFoto = createStorage('foto_perfil')
const storageCurriculo = createStorage('curriculo')
const storagePortifolio = createStorage('portifolio')
 
const Foto = multer({ storage: storageFoto })
const Curriculo = multer({ storage: storageCurriculo })
const Portifolio = multer({ storage: storagePortifolio })

module.exports = {
  Foto,
  Curriculo,
  Portifolio
}