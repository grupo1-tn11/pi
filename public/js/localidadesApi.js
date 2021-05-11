const estadoSelect = document.getElementById('estado')
const cidadeSelect = document.getElementById('cidade')

async function getCidades(uf) {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
  const cidades = await response.json()
  return cidades
}

async function getEstados() {
  const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  const estados = await response.json()
  return estados
}

async function criarOptionsEstados() {
  let ufs = await getEstados()
  let html = "<option value=null default>Selecione um estado</option>"
  
  ufs.forEach(estado => {
    html += `<option value=${estado.sigla}>${estado.nome}</option>`
  });
  
  return html
}

async function criarOptionsCidades(uf) {
  let cidades = await getCidades(uf)
  let html = ""
  
  cidades.forEach(cidade => {
    html += `<option value=${cidade.nome}>${cidade.nome}</option>`
  });
  
  return html
}

async function preencherSelectEstados() {
  estadoSelect.innerHTML = await criarOptionsEstados()
}

preencherSelectEstados()

estadoSelect.addEventListener('change', async (element)=> {
  let estado = estadoSelect.value
  let cidadesHTML = await criarOptionsCidades(estado)
  cidadeSelect.innerHTML = cidadesHTML
})