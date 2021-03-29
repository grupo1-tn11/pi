const titulo = document.getElementById('titulo')
const foto = document.getElementById('foto-perfil')
const resumo = document.getElementById('resumo')
const divExp = document.getElementById('div-exp')
const divFormacao = document.getElementById('div-formacao')
const addExp = document.getElementById('add-exp')
const addFormacao = document.getElementById('add-formacao')
const ulCompetencias = document.getElementById('ul-competencias')
const addCompetencia = document.getElementById('add-competencia')
const ulLinguagens = document.getElementById('ul-linguagens')
const addLinguagem = document.getElementById('add-linguagem')
const repositorio = document.getElementById('repositorio')
const ulRedes = document.getElementById('ul-redes')
const addRedes = document.getElementById('add-redes')

function makeUl(parent) {
  let ul = document.createElement('ul')
  parent.appendChild(ul)
  return ul
}

function createAndAppend(type, parent, child){
  let element = document.createElement(type)
  element.appendChild(child)
  parent.appendChild(element)
  return element
}

function makeLi(
  parent,
  textContent,
  inputType,
  inputValue,
  inputName,
  inputId
) {
  let li = document.createElement('li')
  li.textContent = textContent
  if (inputType) {
    let input = document.createElement('input')
    input.type = inputType
    input.value = inputValue
    input.name = inputName
    input.id = inputId
    li.appendChild(input)
  }
  parent.appendChild(li)
  return li
}

function btnRemove(parent, msg, ...remove) {
  let btn = document.createElement('input')
  btn.type = 'button'
  btn.value = 'Remover'
  parent.appendChild(btn)

  btn.onclick = () => {
    let confirmar = confirm(msg)
    if (confirmar) {
      remove.forEach(element => {
        element.remove()
      })
    }
  }
  return btn
}

async function createLinguagensSelect(selected) {
  const response = await fetch('../linguagens.json')
  const linguagens = await response.json()
  const select = document.createElement('select')
  select.name = 'linguagens'

  if(!selected){
    let option = document.createElement('option')
    option.value=null
    option.textContent=''
    select.appendChild(option)
  }

  linguagens.forEach((linguagem) => {
    let option = document.createElement('option')
    option.value = linguagem.id
    option.textContent = linguagem.nome
    if (linguagem.id == selected) {
      option.selected = true
    }
    select.appendChild(option)
  })
  
  return select
}

async function createRedesSelect(selected) {
  const response = await fetch('../redes.json')
  const redes = await response.json()
  const select = document.createElement('select')
  select.name = 'redes'

  if(!selected){
    let option = document.createElement('option')
    option.value=null
    option.textContent=''
    select.appendChild(option)
  }

  redes.forEach((rede) => {
    let option = document.createElement('option')
    option.value = rede.id
    option.textContent = rede.nome
    if (rede.id == selected) {
      option.selected = true
    }
    select.appendChild(option)
  })
  
  return select
}

const getUsuario = async () => {
  const response = await fetch('../perfil.json')
  const usuario = await response.json()

  titulo.textContent = 'Perfil de ' + usuario.nome
  foto.src = '../foto_perfil/' + usuario.foto

  resumo.textContent = usuario.resumo

  usuario.experiencia_pro.forEach((exp, index) => {
    let ulExp = makeUl(divExp)
    let liIndex = makeLi(ulExp, index + 1, '', '', '', '')
    makeLi(ulExp, 'Cargo: ', 'text', exp.cargo, 'expCargo', '')
    makeLi(ulExp, 'Funcao: ', 'text', exp.funcao, 'expFuncao', '')
    makeLi(ulExp, 'Decscrição: ', 'text', exp.descricao, 'expDecscricao', '')
    makeLi(ulExp, 'Início: ', 'text', exp.inicio, 'expInicio', '')
    makeLi(ulExp, 'Término: ', 'text', exp.termino, 'expTermino', '')

    btnRemove(liIndex, 'Excluir experiência profissional?', ulExp)
  })

  usuario.formacao.forEach((formacao, index) => {
    let ulFormacao = makeUl(divFormacao)
    let liIndex = makeLi(ulFormacao, index + 1, '', '', '', '')
    makeLi(ulFormacao, 'Curso: ', 'text', formacao.curso, 'formacaoCurso', '')
    makeLi(
      ulFormacao,
      'Instituição : ',
      'text',
      formacao.instituicao,
      'formacaoInstituicao ',
      ''
    )
    makeLi(ulFormacao, 'Grau: ', 'text', formacao.grau, 'formacaoGrau', '')
    makeLi(
      ulFormacao,
      'Início: ',
      'text',
      formacao.inicio,
      'formacaoInicio',
      ''
    )
    makeLi(
      ulFormacao,
      'Término: ',
      'text',
      formacao.termino,
      'formacaoTermino',
      ''
    )

    btnRemove(liIndex, 'Excluir formação profissional?', ulFormacao)
  })

  usuario.competencias.forEach((competencia) => {
    let li = makeLi(
      ulCompetencias,
      '',
      'text',
      competencia.nome,
      'competencias',
      ''
    )

    btnRemove(li, 'Excluir competência?', li)
  })

  usuario.linguagens.forEach(async (linguagem) => {
    let select = await createLinguagensSelect(linguagem.id)
    let li = createAndAppend('li', ulLinguagens, select)

    btnRemove(li, 'Excluir linguagem?', li)
  })

  repositorio.value = usuario.repositorio_link

  usuario.redes_sociais.forEach(async (rede) => {
    let select = await createRedesSelect(rede.id)
    liNome = createAndAppend('li', ulRedes, select)
    let liLink = makeLi(ulRedes, '', 'text', rede.Usuarios_redes.link, 'redesLinks', '')
    
    btnRemove(liNome, 'Excluir rede social?', liNome, liLink)
  })
}

addExp.onclick = () => {
  let ulExp = makeUl(divExp)
  let index = makeLi(ulExp, '','','','','')
  makeLi(ulExp, 'Cargo: ', 'text', '', 'expCargo', '')
  makeLi(ulExp, 'Funcao: ', 'text', '', 'expFuncao', '')
  makeLi(ulExp, 'Decscricao: ', 'text', '', 'expDecscricao', '')
  makeLi(ulExp, 'Início: ', 'text', '', 'expInicio', '')
  makeLi(ulExp, 'Término: ', 'text', '', 'expTermino', '')
  btnRemove(index, "Excluir esta experiência profissional?", ulExp)


addFormacao.onclick = () => {
  let ulFormacao = makeUl(divFormacao)
  let index = makeLi(ulFormacao, '', '', '', '', '')
  makeLi(ulFormacao, 'Curso: ', 'text', '', 'formacaoCurso', '')
  makeLi(ulFormacao, 'Instituição : ', 'text', '', 'formacaoinstituicao ', '')
  makeLi(ulFormacao, 'Grau: ', 'text', '', 'formacaoGrau', '')
  makeLi(ulFormacao, 'Início: ', 'text', '', 'formacaoInicio', '')
  makeLi(ulFormacao, 'Término: ', 'text', '', 'formacaoTermino', '')
  btnRemove(index, "Excluir esta formação?", ulFormacao)
  }
}

addCompetencia.onclick = () => {
  let li = makeLi(ulCompetencias, '', 'text', '', 'competencias', '')
  btnRemove(li, "Excluir esta competência?", li)
}

addLinguagem.onclick = async () => {
  let select = await createLinguagensSelect()
    let liNome = createAndAppend('li', ulLinguagens, select)
    btnRemove(liNome, 'Remover linguagem?', liNome)
}

addRedes.onclick = async () => {
  let select = await createRedesSelect()
    let liNome = createAndAppend('li', ulRedes, select)
    let liLink = makeLi(ulRedes, '', 'text', '', 'redesLinks', '')
    btnRemove(liNome, 'Remover rede social?', liNome, liLink)
}

getUsuario()