const {
  Usuarios,
  Usuarios_redes,
  Usuarios_linguagens,
  Competencias,
  Formacao,
  Experiencia_pro,
} = require('../models')
const fs = require('fs')
const path = require('path')

function verificaArray(variavel) {
  if (typeof (variavel == 'string')) {
    variavel = [variavel]
  }
  return variavel
}

const controller = {
  exibir: async (req, res) => {
    let { id } = req.params

    if (!id) {
      id = req.session.usuario.id
    }

    const perfil = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    res.render('perfil', { perfil })
  },

  editar: async (req, res) => {
    const { id } = req.session.usuario
    const perfil = await Usuarios.findByPk(id)

    res.render('./areausuario/editar', { perfil })
  },

  atualizar: async (req, res) => {
    const { body } = req
    const { id } = req.session.usuario
    let file = req.file

    for (let key in body) {
      body[key] = verificaArray(body[key])
    }

    //console.log('body - ', body)

    try {
      if (file) {
        const updatedUsuario = await Usuarios.update(
          {
            resumo: body.resumo[0],
            repositorio: body.repositorio[0],
            curriculo: file.filename,
          },
          {
            where: { id: id },
          }
        )
      } else {
        const updatedUsuario = await Usuarios.update(
          {
            resumo: body.resumo[0],
            repositorio: body.repositorio[0],
          },
          {
            where: { id: id },
          }
        )
      }
    } catch (error) {
      console.log('usuario - ', error)
    }

    try {
      await Competencias.destroy({
        where: { usuarios_id: id },
      })
      for (let i = 0; i < body.competencias.length; i++) {
        Competencias.create({
          nome: body.competencias[i],
          usuarios_id: id,
        })
      }
    } catch (error) {
      console.log('competencias - ', error)
    }

    try {
      await Experiencia_pro.destroy({
        where: { usuarios_id: id },
      })
      for (let i = 0; i < body.expCargo.length; i++) {
        Experiencia_pro.create({
          empresa: body.expEmpresa[i],
          cargo: body.expCargo[i],
          funcao: body.expFuncao[i],
          descricao: body.expDescricao[i],
          inicio: body.expInicio[i],
          termino: body.expTermino[i],
          usuarios_id: id,
        })
      }
    } catch (error) {
      console.log('experiencia_pro - ', error)
    }

    try {
      await Formacao.destroy({
        where: { usuarios_id: id },
      })
      for (let i = 0; i < body.formacaoCurso.length; i++) {
        Formacao.create({
          curso: body.formacaoCurso[i],
          instituicao: body.formacaoInstituicao[i],
          grau: body.formacaoGrau[i],
          inicio: body.formacaoInicio[i],
          termino: body.formacaoTermino[i],
          usuarios_id: id,
        })
      }
    } catch (error) {
      console.log('formacao - ', error)
    }

    try {
      await Usuarios_redes.destroy({
        where: { usuarios_id: id },
      })
      for (let i = 0; i < body.redes.length; i++) {
        Usuarios_redes.create({
          redes_id: body.redes[i],
          link: body.redesLinks[i],
          usuarios_id: id,
        })
      }
    } catch (error) {
      console.log('usuarios_redes - ', error)
    }

    try {
      await Usuarios_linguagens.destroy({
        where: { usuarios_id: id },
      })
      for (let i = 0; i < body.linguagens.length; i++) {
        Usuarios_linguagens.create({
          linguagens_id: body.linguagens[i],
          usuarios_id: id,
        })
      }
    } catch (error) {
      console.log('usuarios_linguagens - ', error)
    }

    //fs.writeFileSync(path.resolve('./log', 'body.json'), JSON.stringify(body))
    res.redirect('/perfil')
  },
}

module.exports = controller
