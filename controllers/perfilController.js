//const path = require('path')
const { Usuarios } = require('../models')

const controller = {
  exibir: async (req, res) => {
    const { id } = req.params
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

    console.log(perfil.linguagens)

    res.render('perfil', { perfil })
  },

  // editar: async (req, res) => {},
}

module.exports = controller
