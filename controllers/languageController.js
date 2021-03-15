const { Linguagens } = require('../models/');

const languageController = {
  criar: async (req, res) => {
    const { nome } = req.body

    const linguagem = await Linguagens.create({
      nome: nome
    })

    if(!linguagem){
      return res.json({ message: 'Erro ao criar linguagem' })
    }

    return res.json(linguagem)
  },
  atualizar: async (req, res) => {
    const { id } = req.params
    const { nome } = req.body

    const linguagem = Linguagens.update({
      nome: nome
    },{
      where: { 
        id: id
      }
    })

    if(!linguagem){
      return res.json({ message: 'Erro ao atualizar linguagem'})
    }

    return res.json({ message: 'Linguagem atualizada com sucesso!'})
  },
  encontrar: async (req, res) => {
    const { id } = req.params

    const linguagem = await Linguagens.findOne({
      where: {
        id: id
      }
    })

    if(!linguagem){
      return res.json({ message: "Linguagem não encontrada"})
    }

    return res.json(linguagem)
  },
  deletar: async (req, res) => {
    const { id } = req.params

    const linguagem = await Linguagens.destroy({
      where: {
        id: id
      }
    })

    if(!linguagem){
      return res.json({ message: 'Erro ao deletar linguagem'})
    }

    return res.json({ message: 'Linguagem deletada com sucesso!'})
  }
}

module.exports = languageController 