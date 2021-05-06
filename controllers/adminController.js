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
  viewUsuario: async (_req,res) => {

    const linguagens = await Linguagens.findAll()
    res.render('admin/usuarios/inserir', { linguagens })
  },
  inserirUsuario: async (req,res) => {
    const { nome, email, cpf, resumo, telefone, estado, cidade, curriculo, 
      repositorio, admin, linguagem, formacaoCurso, formacaoInstituicao, 
      formacaoGrau, formacaoInicio, formacaoTermino } = req.body

      const idLinguagens = []

      const formacoes = []

      const criarUsuario = await Usuarios.create(
        {
          nome,
          email,
          cpf,
          resumo,
          telefone,
          cidade,
          estado,
          curriculo,
          repositorio_link: repositorio,
          admin: admin ? true : false
        })
      

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
  
      if(linguagem){
        let idL = await Linguagens.findAll({
          where: {
            nome: linguagem
          }
        })
  
        idL.forEach(id => {
          idLinguagens.push(id.id)
        })
  
        idLinguagens.forEach(async linguagem => {
          await Usuarios_linguagens.create({
            usuarios_id: id,
            linguagens_id: linguagem
          })
        })
      }
  
      if(formacoes.length > 0){
        formacoes.forEach(async formacao => {
          await Formacao.create({
            curso: formacao.curso,
            instituicao: formacao.instituicao,
            grau: formacao.grau,
            inicio: formacao.inicio,
            termino: formacao.termino,
            usuarios_id: criarUsuario.id,
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
          usuarios_id: criarUsuario.id
        })
      }
  
      res.redirect('/admin/usuarios/')

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

    console.log(linguagem)

    const { id } = req.params

    const idLinguagens = []

    const formacoes = []  

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

    if(linguagem){
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
    } else {
      const deletarLinguagens = await Usuarios_linguagens.destroy({
        where: { 
        usuarios_id: id,
      },
    })
    }

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

    try {
      const atUsuario = await Usuarios.update(
      {
        nome,
        email,
        cpf,
        resumo,
        telefone,
        cidade,
        estado,
        curriculo,
        repositorio_link: repositorio,
        admin: admin ? true : false
      },{
        where: {
          id
        }
      })
    } catch(err) {
      console.log(err);
    }

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
  viewRedesSociais: (_req, res) => {
    res.render('admin/redessociais/inserir')
  },
  inserirRedesSociais: async (req, res) => {
    const { nome } = req.body

    const rede = await Redes_sociais.create({
      nome
    })

    res.redirect('/admin/redessociais')
  },

  verRedesSociais: async (req, res) => {
    const { id } = req.params

    const rede = await Redes_sociais.findByPk(id)

    res.render('admin/redessociais/ver', { rede })
  },
  editarRedesSociais: async (req, res) => {
    const { id } = req.params

    const rede = await Redes_sociais.findByPk(id)
   
    res.render('admin/redessociais/editar', { rede })
  },
  atualizarRedesSociais: async (req, res) => {
    const { id } = req.params
    const { nome } = req.body

    try {
      const rede = await Redes_sociais.update(
        {
          nome: nome
        }
        ,{
        where: {
          id
        }
      })
    } catch(err){
      console.log(err)
    }

    res.redirect('/admin/redessociais/')
  },
  excluirRedesSociais: async (req, res) => {
    const {id} = req.params

    try{
      const rede = await Redes_sociais.destroy({
        where: {
          id
        }
      })
    } catch(err) {
      console.log(err);
    }

    res.redirect('/admin/redessociais/')
  },
  linguagens: async (_req,res) => {

    const linguagens = await Linguagens.findAll({
      order: [[
        'id', 'ASC'
      ]]
    })

    res.render('admin/linguagens/linguagens', { linguagens })
  },
  viewLinguagens: (_req, res) => {
    res.render('admin/linguagens/inserir')
  },
  inserirLinguagens: async (req, res) => {
    const { nome } = req.body

    const linguagens = await Linguagens.create({
      nome
    })

    res.redirect('/admin/linguagens')
  },
  verLinguagem: async (req, res) => {
    const { id } = req.params

    const linguagem = await Linguagens.findByPk(id)

    res.render('admin/linguagens/ver', { linguagem })
  },
  editarLinguagem: async (req, res) => {
    const { id } = req.params

    const linguagem = await Linguagens.findByPk(id)
   
    res.render('admin/linguagens/editar', { linguagem })
  },
  atualizarLinguagem: async (req, res) => {
    const { id } = req.params
    const { nome } = req.body

    try {
      const linguagem = await Linguagens.update(
        {
          nome: nome
        }
        ,{
        where: {
          id
        }
      })
    } catch(err){
      console.log(err)
    }

    res.redirect('/admin/linguagens/')
  },
  excluirLinguagem: async (req, res) => {
    const {id} = req.params

    try{
      const linguagem = await Linguagens.destroy({
        where: {
          id
        }
      })
    } catch(err) {
      console.log(err);
    }

    res.redirect('/admin/linguagens/')
  },
}

module.exports = adminController;