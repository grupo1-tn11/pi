const controller = {
  index: (req, res) => {
    let username = req.session.usuario.nome
    return res.render('./arealogada/index', {username})
  },
  login: (req, res) => {
    return res.render('login')
  },
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
  pesquisar: (req, res)=> {
    return res.render('pesquisa')
  },
  prestador: (req, res)=> {
    return res.render('prestador')
  },
  resumo: (req, res)=> {
    return res.render('resumo')
  }
}

module.exports = controller