// Ativar link Navegação
const navegacao = document.querySelectorAll('.header-menu a');

function AtivarLink(link){
    const href = link.href;
    if(location.href.includes(href)){
        link.classList.add('ativo')
    }
}

navegacao.forEach(AtivarLink)

//Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

function AtivarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
    
    /* Solução mais prática 
        const elemento = document.getElementByID(parametro);
        if(elemento){
            elemento.checked = true;
        }
        const elementoSeguroPrata = document.querySelector('#prata')
        const elementoSeguroOuro = document.querySelector('#ouro')
        if(elemento && elementoSeguroPrata){
            elemento.checked = true;
            elementoSeguroPrata.checked = true;
        }
        else if(elemento && elementoSeguroOuro){
            elemento.checked = true;
            elementoSeguroOuro.checked = true;
        } 
    */
}

parametros.forEach(AtivarProduto)

//Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button')

function AtivarPergunta(event){
    const pergunta = event.currentTarget;
    const atributoControle = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(atributoControle);
    
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa)
    
    
}

function eventoPerguntas(pergunta){
    pergunta.addEventListener('click', AtivarPergunta)
}

perguntas.forEach(eventoPerguntas)

function moveComprar(){
    const comprar = document.querySelector('.compra');
    const fichainformacao = document.querySelector('.ficha-informacoes');
    const bicicletasinformacoes = document.querySelector('.bicicleta-informacao');

    if(window.innerWidth <= 800){
        fichainformacao.appendChild(comprar);
    } else{
        bicicletasinformacoes.appendChild(comprar);
    }
}
window.addEventListener('resize', function() {
    moveComprar();
});

// galeria bicicletas
/*const bicicletas = document.querySelectorAll('.bicicleta-informacao > img')
console.log(bicicletas)
const principal = document.querySelector('.bicicleta-informacao')
console.log(principal)

function trocar(imagem){
    const atual = imagem.currentTarget;
    
    principal.prepend(atual)
    
    console.log(atual)
}

function galeria(bike){
    bike.addEventListener('click', trocar)
}

bicicletas.forEach(galeria)*/

/*const perguntas = document.querySelectorAll('.pergunta');

function mostrar(item){
    item.classList.toggle('ativar');
    

}


function resolucao(){
    const resposta = document.querySelectorAll('.resposta');

    
    
    
    
}
function questionamento(duvida){
    
    duvida.addEventListener('click', resolucao)
}

perguntas.forEach(questionamento)*/