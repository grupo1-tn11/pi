const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('uploads','posts'))
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname)
    let fileName = String(Date.now()) + ext
    cb(null, fileName)
  }
})
 
const upload = multer({ storage: storage })

module.exports = upload;