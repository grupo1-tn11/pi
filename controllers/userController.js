const { Usuarios } = require('../models/');
const bcrypt = require('bcrypt')

const userController = {
  telaCadastro: async (_req, res) => {
    res.render('cadastro')
  },
  criar: async (req, res) => {
  const { nome, email, senha, cpf, resumo, foto, telefone, cidade, estado, curriculo, repositorio } = req.body

  const usuario = await Usuarios.create({
    nome: nome,
    email: email,
    senha: bcrypt.hashSync(senha,10),
    cpf: cpf,
    resumo: resumo,
    foto: foto,
    telefone: telefone,
    cidade: cidade,
    estado: estado,
    curriculo: curriculo,
    repositorio_link: repositorio
  })

  if(!usuario){
    return res.json({ message: 'Falha ao criar usuário'})
  }

  req.session.usuario = {
    id: usuario.id,
    nome: usuario.nome
  }

  return res.json(usuario)

},
  encontrar: async (req, res) => {
    const { id } = req.params

    const usuario = await Usuarios.findOne({
      where: {
        id: id
      }
    })

    if (!usuario){
      return res.json({ message: 'Usuario não encontrado'})
    }

    return res.json(usuario)
  },
  atualizar: async (req, res) => {
    const { id } = req.params
    const { nome } = req.body

    const usuarioAtualizado = await Usuarios.update({
      nome: nome
    },{
      where: {
        id: id
      }
    })

    if(!usuarioAtualizado){
      return res.json({ message: 'Erro ao atualizar o usuário'})
    }

    return res.json({ message: 'Usuário atualizado com sucesso!'})
  },
  deletar: async (req, res) => {
    const { id } = req.params

    const usuarioDeletado = await Usuarios.destroy({
      where: {
        id: id
      }
    })

    if(!usuarioDeletado){
      return res.json({ message: 'Erro ao deletar usuário'})
    }

    return res.json({ message: 'Usuário deletado com sucesso!'})
  }
}

module.exports = userController