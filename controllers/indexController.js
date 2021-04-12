const {
  Usuarios,
  Usuarios_redes,
  Usuarios_linguagens,
  Competencias,
  Formacao,
  Experiencia_pro,
  Linguagens
} = require('../models')

const { Op } = require('sequelize')

const indexController = {
  index: (req, res) => res.render('index'),

  busca: async (req, res) => {

    const perfil = await Usuarios.findAll(
      {
      include: [
        {
          model: Linguagens ,
          as: 'linguagens',
          where: { 
            nome: {
              [Op.like]: '%' + req.query.linguagem + '%'
            }
          }
        },
      ]
    })

    let ids = []

    perfil.forEach(user=>{
      ids.push(user.id)
    })

    const perfilEncontrado = await Usuarios.findAll(
      {
      where: { 
        id: ids
      },
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
      order: [[
        'id', 'ASC'
      ],
      [
        { model: Linguagens, as: 'linguagens' }, 'nome', 'ASC'
      ]
    ],
    })
    
    res.render('resultadobusca', { perfilEncontrado })

  }
}

module.exports = indexController
