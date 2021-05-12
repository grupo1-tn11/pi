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
        div.innerHTML = `<input type="text" name="linguagens" value="${selectLinguagens.value}" readonly hidden>`
        div.innerHTML += `<input type="text" value="${selectLinguagens[selectLinguagens.selectedIndex].textContent}" readonly>
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
        <label for="redesLinks">${selectRedes[selectRedes.selectedIndex].textContent}</label>
        <div>
        <input type="text" name="redes" value="${selectRedes.value}" hidden />
        <input type="text" name="redesLinks" />
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
            <label for="formacaoCurso"><p>Curso</p></label>
            <input type="text" name="formacaoCurso" />
            </div>
            <div>
            <label for="formacaoInstituicao"><p>Instituição</p></label>
            <input type="text" name="formacaoInstituicao" />
            </div>
            <div>
            <label for="formacaoGrau"><p>Grau</p></label>
            <input type="text" name="formacaoGrau" />
            </div>
            <div>
            <label for="formacaoInicio"><p>Início</p></label>
            <input type="date" name="formacaoInicio" />
            </div>
            <div>
            <label for="formacaoTermino"><p>Fim</p></label>
            <input type="date" name="formacaoTermino" />
            </div>
        </div>
        <div class="removerItem">
            <button type="button" id="btnRmv"><img src="../img/deleteicon.svg" /></button>
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
                <label for="expEmpresa"><p>Empresa</p></label>
                <input type="text" name="expEmpresa" />
                </div>
                <div>
                <label for="expCargo"><p>Cargo</p></label>
                <input type="text" name="expCargo" />
                </div>
                <div>
                <label for="expFuncao"><p>Função</p></label>
                <input type="text" name="expFuncao" />
                </div>
                <div>
                <label for="expDescricao"><p>Descrição</p></label>
                <input type="text" name="expDescricao" />
                </div>
                <div>
                <label for="expInicio"><p>Início</p></label>
                <input type="date" name="expInicio"/>
                </div>
                <div>
                <label for="expTermino"><p>Fim</p></label>
                <input type="date" name="expTermino"/>
                </div>
            </div>
            <div class="removerItem">
                <button type="button" id="btnRmv"><img src="../img/deleteicon.svg" /></button>
            </div>
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