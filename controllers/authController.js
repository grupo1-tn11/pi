const { Usuarios } = require('../models')
const bcrypt = require('bcrypt')

const controller = {
  create: (_req, res) => {
    return res.render('login')
  },

  login: async (req, res) => {
    let { email, senha } = req.body
    const usuario = await Usuarios.findOne({
      where: { email: email },
    }).catch((erro) => console.log(erro))
    if (usuario) {
      let check = bcrypt.compareSync(senha, usuario.senha)
      if (check) {
        req.session.user = {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
        }
        res.redirect('/')
      } else {
        res.send('Usuario ou senha inválidos.')
      }
    } else {
      res.send('Usuario ou senha inválidos.')
    }
  },

  logout: (req, res) => {
    req.session.user = null
    res.redirect('/')
  },
}

module.exports = controller
