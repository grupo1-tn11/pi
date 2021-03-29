//const path = require('path')
const { Usuarios, Usuarios_redes } = require('../models')
const fs = require('fs')
const path = require('path')

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

    const perfilJSON = JSON.stringify(perfil)
    console.log(path.resolve('./database', 'perfil.json'))

    fs.writeFileSync(path.resolve('./database', 'perfil.json'), perfilJSON)

    res.render('./areausuario/editar', {perfil})
    
  },

  atualizar: (req, res) => {
    console.log(req.body)
  },
}

module.exports = controller
