const addRede = document.getElementById('addRede');
const addLinguagem = document.getElementById('addLinguagem');
const addFormacao = document.getElementById('addFormacao');
const addExp = document.getElementById('addExp');
const addCompetencia = document.getElementById('addCompetencia');
const gridLinguagens = document.querySelector('.gridLinguagens');
const gridRedes = document.querySelector('.gridRedes');
const selectLinguagens = document.getElementById('selectLinguagens');
const selectRedes = document.getElementById('selectRedes');
const formacao = document.querySelector('.formacao')
const experienciaProfissional = document.querySelector('.experienciaProfissional')
const competencias = document.querySelector('.competencias')


function adicionarRemoverLinguagens() {
    function updateLinguagens() {
        let itemLinguagem = document.querySelectorAll('.itemLinguagem');
        itemLinguagem.forEach(item => {
            const btnRemover = item.querySelector('.removerLinguagem')
            btnRemover.addEventListener('click', () => {
                btnRemover.parentElement.remove()
            })
        })
    }
    
    addLinguagem.addEventListener('click', ()=>{
        let div = document.createElement('div');
        div.className = 'itemLinguagem'
        div.innerHTML = `<input type="text" name="linguagens" value="${selectLinguagens.value}" readonly>
                        <p class="removerLinguagem">Remover</p>`
        gridLinguagens.appendChild(div)
        updateLinguagens()
    })
    
    updateLinguagens()    
}

adicionarRemoverLinguagens()

function adicionarRemoverRedes() {
    function updateInputRedes() {
        let inputRedes = document.querySelectorAll('.inputRedes');
        inputRedes.forEach(input => {
            const btnRemover = input.querySelector('#btnRmv')
            btnRemover.addEventListener('click', ()=> {
                btnRemover.parentElement.parentElement.parentElement.remove()
            })
        })
    }
    
    addRede.addEventListener('click', ()=>{
        const div = document.createElement('div')
        div.className = 'inputRedes'
        div.innerHTML = `
        <label for="${selectRedes.value}">${selectRedes.value}</label>
        <div>
          <input type="text" name="${selectRedes.value}" />
          <div class="removerItem">
            <button type="button" id="btnRmv"><img src="../img/deleteicon.svg" /></button>
          </div>
        </div>`
        
        gridRedes.appendChild(div)
        updateInputRedes()
    })
    
    updateInputRedes()
}

adicionarRemoverRedes()

function adicionarRemoverFormacao() {
    function updateFormacao() {
        let formacaoItems = document.querySelectorAll('.areaFormacao')
        formacaoItems.forEach(formacao => {
            const btnRemover = formacao.querySelector('#btnRmv')
            btnRemover.addEventListener('click', () => {
                btnRemover.parentElement.parentElement.remove()
            })
        })
    }
    
    addFormacao.addEventListener('click', ()=>{
        const div = document.createElement('div')
        div.className = 'area areaFormacao'
        div.innerHTML = `
            <div class="gridInputs">
                <div>
                <label for="empresa"><p>Empresa</p></label>
                <input type="text" name="empresa" />
                </div>
                <div>
                <label for="cargo"><p>Cargo</p></label>
                <input type="text" name="cargo" />
                </div>
                <div>
                <label for="funcao"><p>Função</p></label>
                <input type="text" name="funcao" />
                </div>
                <div>
                <label for="descricao"><p>Descrição</p></label>
                <input type="text" name="descricao" />
                </div>
                <div>
                <label for="inicio"><p>Início</p></label>
                <input type="date" name="inicio"/>
                </div>
                <div>
                <label for="fim"><p>Fim</p></label>
                <input type="date" name="fim"/>
                </div>
            </div>
            <div class="removerItem">
                <button type="button" id="btnRmv"><img src="../img/deleteicon.svg" /></button>
            </div>
        </div>`
        formacao.appendChild(div)
        updateFormacao()
    })
    
    updateFormacao()
}

adicionarRemoverFormacao()

function adicionarRemoverExp() {
    function updateExp() {
        let areaExp = document.querySelectorAll('.areaExp')
        areaExp.forEach(area => {
            const btnRemover = area.querySelector('#btnRmv')
            btnRemover.addEventListener('click', () => {
                btnRemover.parentElement.parentElement.remove()
            })
        })
    }
    
    addExp.addEventListener('click', () => {
        const div = document.createElement('div')
        div.className = 'area areaExp'
        div.innerHTML = `
        <div class="gridInputs">
            <div>
            <label for="cursoexp"><p>Curso</p></label>
            <input type="text" name="cursoexp" />
            </div>
            <div>
            <label for="instituicao"><p>Instituição</p></label>
            <input type="text" name="instituicao" />
            </div>
            <div>
            <label for="grau"><p>Grau</p></label>
            <input type="text" name="grau" />
            </div>
            <div>
            <label for="inicioexp"><p>Início</p></label>
            <input type="date" name="inicioexp" />
            </div>
            <div>
            <label for="fimexp"><p>Fim</p></label>
            <input type="date" name="fimexp" />
            </div>
        </div>
        <div class="removerItem">
            <button type="button" id="btnRmv"><img src="../img/deleteicon.svg" /></button>
        </div>`
        experienciaProfissional.appendChild(div)
    
        updateExp()
    })
    
    updateExp()
}

adicionarRemoverExp()

function adicionarRemoverCompetencias() {
    function updateCompetencias() {
        let areaCompetencia = document.querySelectorAll('.areaCompetencia');
        areaCompetencia.forEach(area => {
            const btnRemover = area.querySelector('#btnRmv')
            btnRemover.addEventListener('click', () => {
                btnRemover.parentElement.parentElement.remove()
            })
        })
    }
    
    addCompetencia.addEventListener('click', () => {
        const div = document.createElement('div')
        div.className = 'area areaCompetencia'
        div.innerHTML = `
        <div>
            <input type="text" name="competencias" />
        </div>
        <div class="removerItem">
            <button type="button" id="btnRmv"><img src="../img/deleteicon.svg" /></button>
        </div>`
        competencias.appendChild(div)
        updateCompetencias()
    })

    updateCompetencias()
}

adicionarRemoverCompetencias()