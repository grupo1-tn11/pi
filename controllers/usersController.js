const bcrypt = require('bcrypt')
const { Usuarios } = require('../models')

const controller = {
  create: (req, res) => {
    return res.render('cadastro')
  },

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
    req.session.user = {
      id: usuarios.id,
      nome: usuarios.nome,
      email: usuarios.email,
    }
    res.redirect('/')
  },

  //delete: (req, res) => {
}

module.exports = controller
