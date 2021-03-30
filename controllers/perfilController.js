//const path = require('path')
const { Usuarios, Usuarios_redes, Linguagens } = require('../models')
const fs = require('fs')
const path = require('path')

const controller = {
  exibir: async (req, res) => {
    let { id } = req.params

    if (!id) {
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
    console.log(path.resolve('./json', 'perfil.json'))

    fs.writeFileSync(path.resolve('./json', 'perfil.json'), perfilJSON)

    res.render('./areausuario/editar', { perfil })
  },

  atualizar: async (req, res) => {
    let both = []
    let {id} = req.session.usuario
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
    
    both.push(usuario)
    both.push(req.body)

    res.send(both)
  }
}

module.exports = controller
