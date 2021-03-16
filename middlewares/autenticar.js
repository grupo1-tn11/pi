module.exports = {
  seLogadoNext: (req, res, next) => {
    const usuario = req.session.usuario
    if(!usuario){
      return res.redirect('/login')
    }

    res.locals.usuario = usuario
    next()
  },

  naoLogadoNext: (req, res, next) => {
    const usuario = req.session.usuario
    if(usuario){
      res.locals.usuario = usuario
      res.redirect('/')
    }
    
    next()
  }
}