const { Usuarios } = require('../models/')
const bcrypt = require('bcrypt')

const userController = {
  exibir: async (_req, res) => {
    message = ""
    res.render('cadastro', {message})
  },

  armazenar: async (req, res) => {
    const { nome, email, senha, cpf, tel, cidade, estado } = req.body
    const { file } = req
    let foto = null

    if (file) {
      foto = file.filename
    }

    try {
      const usuario = await Usuarios.create({
        nome,
        email,
        senha: bcrypt.hashSync(senha, 10),
        cpf,
        foto,
        telefone: tel,
        cidade,
        estado,
      })

      return res.redirect('/login')
    } catch (error) {
      console.log(error)
      message = "Falha ao cadastrar!"
      return res.render('cadastro', {message})
    }
  },

  encontrar: async (req, res) => {
    const { id } = req.params

    const usuario = await Usuarios.findOne({
      where: { id },
    })

    if (!usuario) {
      return res.json({ message: 'Usuario não encontrado' })
    }

    return res.json(usuario)
  },

  deletar: async (req, res) => {
    const { id } = req.params

    const usuarioDeletado = await Usuarios.destroy({
      where: { id },
    })

    if (!usuarioDeletado) {
      return res.json({ message: 'Erro ao deletar usuário' })
    }

    return res.json({ message: 'Usuário deletado com sucesso!' })
  },
}

module.exports = userController
