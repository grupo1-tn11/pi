// Adicionado middleware para o index conseguir pegar a variável usuario para trocar o header

module.exports = (req, res, next) => {
  const usuario = req.session.usuario
  if (usuario) {
    res.locals.usuario = usuario
  }
  next()
}
