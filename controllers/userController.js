const { Usuarios } = require('../models/')
const bcrypt = require('bcrypt')

const userController = {
  exibir: async (_req, res) => {
    res.render('cadastro')
  },

  armazenar: async (req, res) => {
    const { nome, email, senha, cpf, tel, cidade, estado } = req.body

    const usuario = await Usuarios.create({
      nome,
      email,
      senha: bcrypt.hashSync(senha, 10),
      cpf,
      resumo: null,
      foto: null,
      telefone: tel,
      cidade,
      estado,
      curriculo: null,
      repositorio_link: null,
    })

    if (!usuario) {
      return res.send('Falha ao criar usuário')
    }

    return res.redirect('/login')
  },

  encontrar: async (req, res) => {
    const { id } = req.params

    const usuario = await Usuarios.findOne({
      where: {
        id: id,
      },
    })

    if (!usuario) {
      return res.json({ message: 'Usuario não encontrado' })
    }

    return res.json(usuario)
  },
  
  atualizar: async (req, res) => {
    const { id } = req.params
    const { nome } = req.body

    const usuarioAtualizado = await Usuarios.update(
      {
        nome: nome,
      },
      {
        where: {
          id: id,
        },
      }
    )

    if (!usuarioAtualizado) {
      return res.json({ message: 'Erro ao atualizar o usuário' })
    }

    return res.json({ message: 'Usuário atualizado com sucesso!' })
  },

  deletar: async (req, res) => {
    const { id } = req.params

    const usuarioDeletado = await Usuarios.destroy({
      where: {
        id: id,
      },
    })

    if (!usuarioDeletado) {
      return res.json({ message: 'Erro ao deletar usuário' })
    }

    return res.json({ message: 'Usuário deletado com sucesso!' })
  },
}

module.exports = userController
