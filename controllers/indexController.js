const indexController = {
  index: (req,res) => res.render('index'),
  logout: (req,res) => {
    delete req.session.usuario
    delete res.locals.usuario

    return res.redirect('/')
  }
}

module.exports = indexController