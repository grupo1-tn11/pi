let botoesExcluir = document.querySelectorAll('.excluir')

botoesExcluir.forEach(botao => {
    botao.addEventListener('click', (e) => {
    e.preventDefault
    let resultado = confirm('Deseja realmente excluir o usuário?')
    if(resultado == false){
        botao.parentNode.href=""
    }
    })
})