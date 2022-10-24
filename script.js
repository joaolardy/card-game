let numeroCartas;
const vetorGifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
const vetorCartas = [];
determinarNumeroDeCartas();
criarVetorCartas();
imprimirCartas();
let cartaAnterior;
let cartaAtual;
let jogadas = 0;
let jogarMais;

function virarCarta(elemento){
    elemento.classList.remove('verso');
    elemento.classList.add('frente');
}

function verificaCondicao(elemento){
    jogadas = jogadas + 1;
    if(elemento.classList.contains('frente-fixa') === false){
        if(cartaAnterior == undefined){
            virarCarta(elemento);
            cartaAnterior = elemento;
        }else{
            virarCarta(elemento);
            cartaAtual = elemento;
            (cartaAtual.id == cartaAnterior.id) ? fixaCartas(): desvirarCartas(cartaAnterior, cartaAtual);
            cartaAnterior = undefined;
            cartaAtual = undefined;
        }
    }

}

function fixaCartas(){
    cartaAnterior.classList.add('frente-fixa');
    cartaAtual.classList.add('frente-fixa');
    setTimeout(verificarVitoria, 1000);
}

function desvirarCartas(cartaAnterior, cartaAtual){
    setTimeout(esperaParaDesvirar, 1000, cartaAnterior, cartaAtual);
}

function esperaParaDesvirar(cartaAnterior, cartaAtual){
    cartaAnterior.classList.remove('frente');
    cartaAnterior.classList.add('verso');
    cartaAtual.classList.remove('frente');
    cartaAtual.classList.add('verso');
}

//verifica se o numero incluido pelo usuario é valido
function determinarNumeroDeCartas(){
    while(numeroCartas > 14 || numeroCartas % 2 == 1 || numeroCartas < 4 || numeroCartas == undefined){
        numeroCartas = prompt('Com qual número de cartas você deseja jogar?');
    }
}

//coloca duas cartas de cada papagaio no vetor que será exportado pro html
function criarVetorCartas(){
    for (i = 0; i < numeroCartas/2; i++){
        vetorCartas.push(vetorGifs[i]);
        vetorCartas.push(vetorGifs[i]);
    }
    vetorCartas.sort(embaralha);
}

//embaralha o array
function embaralha() { 
	return Math.random() - 0.5; 
}

//imprime as cartas
function imprimirCartas(){
    for(let i = 0; i < vetorCartas.length; i++){
        document.querySelector('ul').innerHTML += `<li onclick="verificaCondicao(this)" id=${vetorCartas[i]} class="carta verso">
        <img class = "imagem-carta" src="./gifs/${vetorCartas[i]}">
        <img class = "imagem-carta" src="./images/back.png">
        </li>`
    }
}

function verificarVitoria(){
    let cartaVirada = document.querySelector('.verso');
    console.log(cartaVirada);
    if(cartaVirada == null){
        alert(`Parabéns, você venceu com ${jogadas} jogadas!`);
        desejaJogarMais();
        if (jogarMais == 'sim'){
            window.location.reload(false);
            return 0;
        }
        if(jogarMais == 'nao'){
            return 0;
        }
        desejaJogarMais();
    }

}

function desejaJogarMais(){
    jogarMais = prompt('Deseja jogar mais uma vez?');
}