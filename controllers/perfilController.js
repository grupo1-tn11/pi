const {
  Usuarios,
  Usuarios_redes,
  Usuarios_linguagens,
  Competencias,
  Formacao,
  Experiencia_pro,
  Linguagens,
  Redes_sociais
} = require('../models')

const fs = require('fs')
const path = require('path')

function verificaArray(variavel) {
  if (typeof(variavel) === 'string') {
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

    const linguagens = await Linguagens.findAll()
    const RedesSociais = await Redes_sociais.findAll()

    res.render('./areausuario/editar', { perfil, linguagens, RedesSociais })
  },

  atualizar: async (req, res) => {
    const { body } = req
    const { id } = req.session.usuario
    let files = req.files

    // console.log(files.foto[0].filename);
    // console.log(files.curriculo[0].filename);
    // console.log(files.foto);
    // console.log(files.curriculo);

    for (let key in body) {
      body[key] = verificaArray(body[key])
    }

    //console.log('body - ', body)

    const usuario = await Usuarios.findByPk(id)

    try {
      if (files) {
        await Usuarios.update(
          {
            nome: body.nome[0],
            email: body.email[0],
            resumo: body.resumo[0],
            telefone: body.telefone[0],
            repositorio_link: body.repositorio[0],
            foto: files.foto ? files.foto[0].filename : usuario.foto,
            curriculo: files.curriculo ? files.curriculo[0].filename : usuario.curriculo
          },
          {
            where: { id: id },
          }
        )
      } else {
        await Usuarios.update(
          {
            nome: body.nome[0],
            email: body.email[0],
            resumo: body.resumo[0],
            repositorio_link: body.repositorio[0],
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
        for (let i in body.competencias) {
          await Competencias.create({
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
        for (let i in body.expCargo) {
          await Experiencia_pro.create({
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
        for (let i in body.formacaoCurso) {
          await Formacao.create({
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
        for (let i in body.redes) {
          await Usuarios_redes.create({
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
        for (let i in body.linguagens) {
          await Usuarios_linguagens.create({
            linguagens_id: body.linguagens[i],
            usuarios_id: id,
          })
        }
      } catch (error) {
        console.log('usuarios_linguagens - ', error)
      }
      
    //fs.writeFileSync(path.resolve('./log', 'body.json'), JSON.stringify(body))
    // console.log(req.body)
    res.redirect('/perfil')
  },
}

module.exports = controller