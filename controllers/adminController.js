const { Usuarios, Redes_sociais, Linguagens, Competencias, 
        Usuarios_linguagens, Formacao, Experiencia_pro, Portifolio, Usuarios_redes } = require('../models/')

const { Op } = require("sequelize");

const adminController = {
  index: (_req,res) => {
    res.render('admin/index')
  },
  usuarios: async (_req,res) => {

    const usuarios = await Usuarios.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/usuarios/usuarios', { usuarios })
  },
  verUsuario: async (req, res) => {
    const { id } = req.params

    const usuario = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    res.render('admin/usuarios/ver', { usuario })
  },
  editarUsuario: async (req,res) => {
    const { id } = req.params

    const usuario = await Usuarios.findByPk(id, {
      include: [
        'formacao',
        'experiencia_pro',
        'portifolio',
        'competencias',
        'linguagens',
        'redes_sociais',
      ],
    })

    if(!usuario){
      res.send('Usuário não encontrado!')
    }

    const linguagens = await Linguagens.findAll({
      order:[[
        'nome', 'ASC'
      ]]
    })

    res.render('admin/usuarios/editar', { usuario, linguagens })
  },
  excluirUsuario: async (req, res) => {
    const { id } = req.params

    const deleteFormacoes = await Formacao.destroy({
      where: { 
        usuarios_id: id 
      }
    })

    const deleteExperienciaPro = await Experiencia_pro.destroy({
      where: { 
        usuarios_id: id 
      }
    })

    const deletePortifolio = await Portifolio.destroy({
      where: { 
        usuarios_id: id 
      }
    })

    const deleteCompetencias = await Competencias.destroy({
      where: { 
        usuarios_id: id 
      }
    })

    const deleteLinguagens = await Usuarios_linguagens.destroy({
      where: { 
        usuarios_id: id 
      }
    })

    const deleteRedes = await Usuarios_redes.destroy({
      where: { 
        usuarios_id: id 
      }
    })

    const deleteUsuario = await Usuarios.destroy({
      where: { 
      id
      },
    })

    res.redirect('/admin/usuarios/')
  },
  atualizarUsuario: async(req,res) => {
    const { nome, email, cpf, resumo, telefone, estado, cidade, curriculo, 
            repositorio, admin, linguagem, formacaoCurso, formacaoInstituicao, 
            formacaoGrau, formacaoInicio, formacaoTermino } = req.body
    const { id } = req.params

    const idLinguagens = []

    const formacoes = []  

    console.log(Array.isArray(formacaoCurso));

    if(Array.isArray(formacaoCurso)) {

      for (let index = 0; index < formacaoCurso.length; index++) {
        const formacao = {
          curso: formacaoCurso[index],
          instituicao: formacaoInstituicao[index],
          grau: formacaoGrau[index],
          inicio: formacaoInicio[index],
          termino: formacaoTermino[index]
        }
      
        formacoes.push(formacao);
      }
    }

    // console.log(formacoes);

    let idL = await Linguagens.findAll({
      where: {
        nome: linguagem
      }
    })

    idL.forEach(id => {
      idLinguagens.push(id.id)
    })

    const deletarLinguagens = await Usuarios_linguagens.destroy({
        where: { 
        usuarios_id: id,
      },
    })

    idLinguagens.forEach(async linguagem => {
      await Usuarios_linguagens.create({
        usuarios_id: id,
        linguagens_id: linguagem
      })
    })

    const deletarFormacoes = await Formacao.destroy({
      where: { 
      usuarios_id: id,
      },
    })

    if(formacoes.length > 0){
      formacoes.forEach(async formacao => {
        await Formacao.create({
          curso: formacao.curso,
          instituicao: formacao.instituicao,
          grau: formacao.grau,
          inicio: formacao.inicio,
          termino: formacao.termino,
          usuarios_id: id,
        })
      })
    } 
    if(formacaoCurso && !Array.isArray(formacaoCurso)) {
      await Formacao.create({
        curso: formacaoCurso,
        instituicao: formacaoInstituicao,
        grau: formacaoGrau,
        inicio: formacaoInicio,
        termino: formacaoTermino,
        usuarios_id: id
      })
    }
    // console.log(req.body);

    res.redirect('/admin/usuarios/')
    
  },
  redessociais: async (req,res) => {

    let { nome } = req.query

    const redessociais = await Redes_sociais.findAll({
      where: { 
          nome: {[Op.like]: nome ? '%' + nome + '%' : '%'}
        },
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/redessociais/redessociais', { redessociais })
  },
  linguagens: async (_req,res) => {

    const linguagens = await Linguagens.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/linguagens/linguagens', { linguagens })
  },
  competencias: async (_req,res) => {

    const competencias = await Competencias.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/competencias/competencias', { competencias })
  },
}

module.exports = adminController;