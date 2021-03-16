const verificaAutenticacao = (req, res, next) => {
  const usuario = req.session.usuario
  if(!usuario){
    return res.redirect('/login')
  }

  next()
}

module.exports = verificaAutenticacao