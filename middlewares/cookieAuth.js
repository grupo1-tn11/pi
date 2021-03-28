const cookiePass = require('../configs/cookiePassword')

module.exports = (req, _res, next) => {
  const { usuarioId, usuarioNome, usuarioEmail, hash } = req.cookies

  const checkHash = cookiePass.consulta(hash, usuarioEmail)

  if (checkHash && !req.session.usuario) {
    req.session.usuario = {
      id: usuarioId,
      nome: usuarioNome,
      email: usuarioEmail,
    }
  }

  next()
}
