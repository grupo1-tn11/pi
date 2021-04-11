const { Usuarios } = require('../models/')
const { Redes_sociais } = require('../models/')
const { Linguagens } = require('../models/')
const { Competencias } = require('../models/')
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
  verusuario: async (req,res) => {
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

    res.render('admin/usuarios/ver', { usuario })
  },
  atualizarusuario: async(req,res) => {
    console.log(req.body)
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