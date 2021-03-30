const { Usuarios } = require('../models/')
const bcrypt = require('bcrypt');
const cookiePass = require('../configs/cookiePassword')

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
      nome: usuario.nome,
      email: usuario.email
    }

    res.cookie('usuarioId', usuario.id, {maxAge: 86400000})
    res.cookie('usuarioNome', usuario.nome, {maxAge: 86400000})
    res.cookie('usuarioEmail', usuario.email, {maxAge: 86400000})
    res.cookie('hash', cookiePass.set(usuario.email) , {maxAge: 86400000})

    return res.redirect('/') 
  },

  logout: (req,res) => {
    delete req.session.usuario
    delete res.locals.usuario
    res.clearCookie('usuarioId')
    res.clearCookie('usuarioNome')
    res.clearCookie('usuarioEmail')
    res.clearCookie('hash')

    return res.redirect('/')
  }

}

module.exports = authController;