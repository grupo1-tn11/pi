const controller = {
  index: (req, res) => {
    return res.render('index')
  },
  login: (req, res) => {
    return res.render('login')
  },
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
}

module.exports = controller
