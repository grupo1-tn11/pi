const { Usuarios } = require('../models/')

const adminController = {
  index: (_req,res) => {
    res.render('admin/index')
  },
  usuarios: async (_req,res) => {

    const usuarios = await Usuarios.findAll()

    res.render('admin/usuarios', { usuarios })
  }
}

module.exports = adminController;