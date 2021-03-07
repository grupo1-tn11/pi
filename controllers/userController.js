const bcrypt = require("bcrypt")
const session = require("express-session")
const { Usuarios } = require("../models")


const controller = {
  store: async (req, res) => {
    let { nome, email, senha, cpf, tel, cidade, estado } = req.body
    let encriptedPass = bcrypt.hashSync(senha, 10)
    const usuarios = await Usuarios.create({
      nome: nome,
      email: email,
      senha: encriptedPass,
      cpf: cpf,
      telefone: Number(tel),
      cidade: cidade,
      estado: estado,
    })
    req.sessuion.usuario = usuarios
    res.redirect("/")
  },

  auth: async (req, res) => {
    let { email, senha } = req.body
    let usuario = await Usuarios.findOne({
      where: { email: email },
    }).catch((erro) => console.log(erro))
    if (usuario) {
      let check = bcrypt.compareSync(senha, usuario.senha)
      if (check) {
        req.session.usuario = usuario
        res.redirect('/')
      } else {
        res.send('Usuario ou senha inválidos.')
      }
    } else {
      res.send('Usuario ou senha inválidos.')
    }
  },

  logout: (req, res) => {
    req.session.usuario = null
    res.redirect('/')
  }
}

module.exports = controller
