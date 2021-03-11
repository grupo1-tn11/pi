module.exports = {
  isLogged: (req, res, next) => {
    if (req.session.user) {
      return next()
    } else {
      res.redirect('/login')
    }
  },
  notLogged: (req, res, next) => {
    if (req.session.user == undefined) {
      return next()
    } else {
      return res.redirect('/logado')
    }
  }
}