//const path = require('path')
const { Usuarios, Usuarios_redes } = require('../models')

const controller = {
  exibir: async (req, res) => {
    let { id } = req.params

    if(!id){
      id = req.session.usuario.id
    }

    const perfil = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    res.render('perfil', { perfil })
  },

  editar: async (req, res) => {
    const { id } = req.session.usuario
    const perfil = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    res.render('./areausuario/editar', { perfil })
  },

  atualizar: async (req, res) => {},
}

module.exports = controller
