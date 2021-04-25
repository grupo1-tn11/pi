const btnAdicionar = document.querySelector('.btnAdicionarLinguagem')
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
    }
    atualizarLinguagens()
})

atualizarLinguagens()

