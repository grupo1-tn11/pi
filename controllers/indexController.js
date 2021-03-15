const indexController = {
  index: (req,res) => {
    const usuario = req.session.usuario
    res.locals.usuario = usuario
    console.log(usuario)

   return res.render('index')
},
  logout: (req,res) => {
    delete req.session.usuario
    delete res.locals.usuario

    return res.redirect('/')
  }
}

module.exports = indexController