const {Linguagens} = require('../models')

const controller = {
  test: async (req, res) => {
    let linguagens = await Linguagens.findAll() 
    return res.render('test', {linguagens})
  }
}

module.exports = controller