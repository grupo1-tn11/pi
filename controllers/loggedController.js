const controller = {
  index: (req, res) => {
    let username = req.session.usuario.nome
    return res.render('./arealogada/index', { username })
  },
  login: (req, res) => {
    return res.redirect('/')
  },
  cadastro: (req, res) => {
    return res.redirect('/')
  },
}

module.exports = controller