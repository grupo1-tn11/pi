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

    const portifolio = perfil.portifolio

    res.render('portifolio', { perfil, portifolio })
  },

  // editar: async (req, res) => {},
}

module.exports = controller
