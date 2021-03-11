const controller = {
  index: (_req, res) => {
    return res.render('index')
  },

  loggedIndex: (req, res) => {
    res.locals.username = req.session.user.nome
    return res.render('./arealogada/index')
  },
}

module.exports = controller
