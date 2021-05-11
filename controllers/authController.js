const { Usuarios } = require('../models/')
const bcrypt = require('bcrypt');
const cookiePass = require('../configs/cookiePassword')

const authController = {
  login: (_req, res) => {
    let message = ''
    res.render('login', {message})
  },

  autenticar: async (req, res) => {
    const { email, senha } = req.body;

    let usuario
    try{
      usuario = await Usuarios.findOne({
        where: { 
          email
        }
      })

      const senhaValidada = bcrypt.compareSync(senha, usuario.senha)
  
      if(!senhaValidada){
        let message = 'Usuário ou senha não encontrados.'
        return res.render('login', {message})
      }

    } catch (error) {
      console.log(error)
      let message = 'Usuário ou senha não encontrados.'
      return res.render('login', {message})
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