const { Usuarios, Linguagens, Redes_sociais } = require('../models')

const controller = {
  usuario: async (req, res) => {
    const {id} = req.session.usuario
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
    return res.json(perfil)
  },

  linguagens: async (_req, res) => {
    const linguagens = await Linguagens.findAll()
    return res.json(linguagens)
  },

  redes: async (_req, res) => {
    const redes = await Redes_sociais.findAll()
    return res.json(redes)
  },

}

module.exports = controller
