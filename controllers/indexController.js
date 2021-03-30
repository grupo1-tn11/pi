const indexController = {
  index: (req, res) => res.render('index'),
  busca: (req, res) => {
    res.render('resultado-busca')
  }
}

module.exports = indexController
