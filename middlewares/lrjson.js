//passa a lista de linguagens e de redes sociais para o front através de json

const {Linguagens, Redes_sociais} = require('../models')
const fs = require('fs')
const path = require('path')

module.exports = async (req, res, next) => {
  const linguagens = await Linguagens.findAll()
  const redes = await Redes_sociais.findAll()

  const linguagensJson = JSON.stringify(linguagens)
  const redesJson = JSON.stringify(redes)

  fs.writeFileSync(path.resolve('./database', 'linguagens.json'), linguagensJson)
  fs.writeFileSync(path.resolve('./database', 'redes.json'), redesJson)

  next()
}