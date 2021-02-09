//const express = require('express')

const controller = {
  index: (req, res) => {
    return res.render('index')
  },
  login: (req, res) => {
    return res.render('login')
  },
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
  logado: (req, res) => {
    return res.render('logado')
  },
  pesquisar: (req, res)=> {
    return res.render('pesquisa')
  },
  prestador: (req, res)=> {
    return res.render('prestador')
  },
  resumo: (req, res)=> {
    return res.render('resumo')
  }
}

module.exports = controller