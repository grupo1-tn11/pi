const { Usuarios } = require('../models/')
const bcrypt = require('bcrypt');

const authController = {
  login: (_req, res) => {
    res.render('login')
  },
  autenticar: async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await Usuarios.findOne({
      where: { 
        email
      }
    })

    if(!usuario){
      return res.send('Usuário não encontrado.')
    }

    const resultado = bcrypt.compareSync(senha, usuario.senha)

    if(!resultado){
      return res.send('Senha incorreta')
    }

    req.session.usuario = {
      id: usuario.id,
      nome: usuario.nome
    }

    console.log(req.session.usuario);
    
    return res.send('Usuário autenticado com sucesso!')
  }

}

module.exports = authController;