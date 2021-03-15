const verificaAutenticacao = (req, res, next) => {
  const usuario = req.session.usuario
  console.log(usuario)
  if(!usuario){
    return res.redirect('/login')
  }

  next()
}

module.exports = verificaAutenticacao