module.exports = (req, res, next) => {
  const usuario = req.session.usuario
  res.locals.usuario = usuario

  next()
}