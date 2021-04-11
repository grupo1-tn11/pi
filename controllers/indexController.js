const {
  Usuarios,
  Usuarios_redes,
  Usuarios_linguagens,
  Competencias,
  Formacao,
  Experiencia_pro,
  Linguagens
} = require('../models')

const indexController = {
  index: (req, res) => res.render('index'),

  busca: async (req, res) => {
    console.log(req.query)

    const perfilEncontrado = await Usuarios.findAll(
      {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        {
          model: Linguagens ,
          as: 'linguagens',
          where: { 
            nome: req.query.linguagem
          }
        },
        'redes_sociais',
      ],
    })

    console.log(perfilEncontrado)

    // let perfilEncontrado = []

    // perfil.forEach(user =>{
    //   let temLinguagem = false
    //   user.linguagens.forEach((linguagem) => {
    //     if(linguagem.nome == req.query.linguagem){
    //       temLinguagem = true
    //     }
    //   })
    //   if(temLinguagem == true){
    //    perfilEncontrado.push(user)
       
    //   }
    // })
    
    res.render('resultadobusca', { perfilEncontrado })

  }
}

module.exports = indexController
