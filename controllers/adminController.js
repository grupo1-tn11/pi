const { Usuarios, Redes_sociais, Linguagens, Competencias, Usuarios_linguagens } = require('../models/')
// const { Redes_sociais } = require('../models/')
// const { Linguagens } = require('../models/')
// const { Competencias } = require('../models/')
const { Op } = require("sequelize");

const adminController = {
  index: (_req,res) => {
    res.render('admin/index')
  },
  usuarios: async (_req,res) => {

    const usuarios = await Usuarios.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/usuarios/usuarios', { usuarios })
  },
  verUsuario: async (req, res) => {
    const { id } = req.params

    const usuario = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    res.render('admin/usuarios/ver', { usuario })
  },
  editarUsuario: async (req,res) => {
    const { id } = req.params

    const usuario = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    if(!usuario){
      res.send('Usuário não encontrado!')
    }

    const linguagens = await Linguagens.findAll({
      order:[[
        'nome', 'ASC'
      ]]
    })

    res.render('admin/usuarios/editar', { usuario, linguagens })
  },
  atualizarUsuario: async(req,res) => {
    const { nome, email, cpf, resumo, telefone, estado, cidade, curriculo, 
            repositorio, admin, linguagem } = req.body
    const { id } = req.params
    
    const idLinguagens = []

    let idL = await Linguagens.findAll({
      where: {
        nome: linguagem
      }
    })

    idL.forEach(id => {
      idLinguagens.push(id.id)
    })

    const deletarLinguagens = await Usuarios_linguagens.destroy({
        where: { 
        usuarios_id: id,
      },
    })

    idLinguagens.forEach(async linguagem => {
      await Usuarios_linguagens.create({
        usuarios_id: id,
        linguagens_id: linguagem
      })
    })

    res.redirect('/admin/usuarios/')
    
  },
  redessociais: async (req,res) => {

    let { nome } = req.query

    const redessociais = await Redes_sociais.findAll({
      where: { 
          nome: {[Op.like]: nome ? '%' + nome + '%' : '%'}
        },
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/redessociais/redessociais', { redessociais })
  },
  linguagens: async (_req,res) => {

    const linguagens = await Linguagens.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/linguagens/linguagens', { linguagens })
  },
  competencias: async (_req,res) => {

    const competencias = await Competencias.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/competencias/competencias', { competencias })
  },
}

module.exports = adminController;