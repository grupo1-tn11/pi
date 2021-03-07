module.exports = {
  toIndex: (req, res, next) => {
    if (req.session.usuario) {
      return next()
    } else {
      return res.render("index")
    }
  },
  toLogin: (req, res, next) => {
    if (req.session.usuario) {
      return next()
    } else {
      return res.redirect("/login")
    }
  },
}
