const btnAdicionar = document.getElementById('addLinguagem')
const selectLinguagem = document.getElementById('selecionarLinguagem')
const linguagensPai = document.querySelector('.linguagens')
let linguagens = document.querySelectorAll('.inputreadonly')
let inputsLinguagem = document.querySelectorAll('.inputreadonly > input')

function atualizarLinguagens() {

    let existeLinguagem = false
    linguagens = document.querySelectorAll('.inputreadonly')
    inputsLinguagem = document.querySelectorAll('.inputreadonly > input')

    inputsLinguagem.forEach(input => {
        if(input.value == selectLinguagem.selectedOptions[0].value){
            existeLinguagem = true
        }
    })

    linguagens.forEach(linguagem => {
        const btnRemover = linguagem.querySelector('button')
        btnRemover.addEventListener('click', () => {
            linguagem.remove()
        })})

    return existeLinguagem
}

btnAdicionar.addEventListener('click', () => {
    let result = atualizarLinguagens()
    if(!result){ 
     linguagensPai.innerHTML +=`
         <div class="inputreadonly">
             <input type="text" name="linguagem" id="${selectLinguagem.selectedOptions[0].id}" value="${selectLinguagem.selectedOptions[0].value}" readonly />
             <button type="button" class='btnRemover' id="${selectLinguagem.selectedOptions[0].id}">X</button>
         </div>`
    } else {
        alert('Já existe a linguagem inserida para o usuário.')
    }
    atualizarLinguagens()
})

atualizarLinguagens()

const btnAdicionarFormacao = document.getElementById('addFormacao')
const btnRemoverFormacao = document.getElementById('removerFormacao')
let containerFormacao = document.getElementById('addRemoveFormacao')
let qtdFormacoes = document.querySelectorAll('.inputFormacoes').length + 1
let formacoes = document.querySelectorAll('.inputFormacoes')

function atualizarFormacao() {
    qtdFormacoes = document.querySelectorAll('.inputFormacoes').length + 1
    formacoes = document.querySelectorAll('.inputFormacoes')

    formacoes.forEach(formacao => {
        const btnRemoverF = formacao.querySelector('button')
        const hrF = formacao.nextElementSibling
        btnRemoverF.addEventListener('click', ()=>{
            formacao.remove()
            hrF.remove()
        })
    })
}

function adicionarFormacao() {
    const div = document.createElement('div')
    div.classList.add('inputFormacoes')
    const hr = document.createElement('hr')

    div.innerHTML = `
             <div>
                 <label for="formacao">Curso: </label>
                 <input type="text" name="formacaoCurso" id="${qtdFormacoes}" value="" />
             </div>
             <div>
                 <label for="formacao">Instituição: </label>
                 <input type="text" name="formacaoInstituicao" id="${qtdFormacoes}" value="" />
             </div>
             <div>
                 <label for="formacao">Grau: </label>
                 <input type="text" name="formacaoGrau" id="${qtdFormacoes}" value="" />
             </div>
             <div>
                 <label for="formacao">Início: </label>
                 <input type="text" name="formacaoInicio" id="${qtdFormacoes}" value="" />
             </div>
             <div>
                 <label for="formacao">Término: </label>
                 <input type="text" name="formacaoTermino" id="${qtdFormacoes}" value="" />
             </div>
             <button type="button" id="removerFormacao" class="btnAdicionarLinguagem" style="width: 100px">Remover</button>`

    containerFormacao.appendChild(div)
    containerFormacao.appendChild(hr)
    atualizarFormacao()
}

btnAdicionarFormacao.addEventListener('click', adicionarFormacao)

atualizarFormacao() 