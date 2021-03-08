module.exports = (req, res, next) => {
  if (req.session.usuario == undefined) {
    return next()
  } else {
    return res.redirect('/logado')
  }
}

