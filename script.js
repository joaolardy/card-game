let numeroCartas;
const vetorGifs = ["bobrossparrot.gif", "explodyparrot.gif", "fiestaparrot.gif", "metalparrot.gif", "revertitparrot.gif", "tripletsparrot.gif", "unicornparrot.gif"];
const vetorCartas = [];
determinarNumeroDeCartas();
criarVetorCartas();
imprimirCartas();


function virarCarta(elemento){

}

//verifica se o numero incluido pelo usuario é valido
function determinarNumeroDeCartas(){
    while(numeroCartas > 14 || numeroCartas % 2 == 1 || numeroCartas < 4 || numeroCartas == undefined){
        numeroCartas = prompt('Com qual número de cartas você deseja jogar?');
    }
}

//coloca duas cartas de cada papagaio no vetor que será exportado pro html
function criarVetorCartas(){
    for (i = 0; i < numeroCartas; i++){
        vetorCartas.push(vetorGifs[i]);
        vetorCartas.push(vetorGifs[i]);
        i++;
    }
    vetorCartas.sort(embaralha);
    console.log(vetorCartas);
}

//embaralha o array
function embaralha() { 
	return Math.random() - 0.5; 
}

//imprime as cartas
function imprimirCartas(){
    for(let i = 0; i < vetorCartas.length; i++){
        document.querySelector('ul').innerHTML += `<li class="carta frente"><img class = "imagem-carta" src="./gifs/${vetorCartas[i]}"></li>`
    }
}
