const {
  Usuarios,
  Usuarios_redes,
  Usuarios_linguagens,
  Competencias,
  Formacao,
  Experiencia_pro,
  Linguagens,
} = require('../models')

const { Op } = require('sequelize')

const indexController = {
  index: (req, res) => res.render('index'),

  busca: async (req, res) => {

    const { linguagem, curso, competencia } = req.query

    const perfisEncontrados = await Usuarios.findAll({
      include: [
        {
          model: Linguagens,
          as: 'linguagens',
          where: {
            nome: {
              [Op.like]: linguagem ? '%' + linguagem + '%' : '%',
            },
          },
          required: linguagem ? true : false
        },
        {
          model: Formacao,
          as: 'formacao',
          where: {
            curso: {
              [Op.like]: curso ? '%' + curso + '%' : '%',
            },
          },
          required: curso ? true : false
        },
        {
          model: Competencias,
          as: 'competencias',
          where: {
            nome: {
              [Op.like]: competencia ? '%' + competencia + '%' : '%',
            },
          },
          required: competencia ? true : false
        },
      ],
    })

    let ids = []

    perfisEncontrados.forEach(perfil => {
      ids.push(perfil.id)
    })

    console.log(ids)

    const resultadoBusca = await Usuarios.findAll({
      where: {
        id: ids,
      },
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
      order: [
        ['id', 'ASC'],
        [{ model: Linguagens, as: 'linguagens' }, 'nome', 'ASC'],
      ],
    })

    res.render('resultadobusca', { resultadoBusca })
  },
}

module.exports = indexController
