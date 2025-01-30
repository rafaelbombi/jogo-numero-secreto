// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
let listaDeNumerosSorteados = [];
let numeroLimite = 1000;
let tentativas = 1;

function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
     }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
     }
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    //este trecho foi inutilizado para teste do trecho do if logo abaixo
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );

    // if ('speechSynthesis' in window) {
    //     let utterance = new SpeechSynthesisUtterance(texto);
    //     utterance.lang = 'pt-BR'; 
    //     utterance.rate = 1.8; 
    //     window.speechSynthesis.speak(utterance); 
    // } else {
    //     console.log("Web Speech API não suportada neste navegador.");
    // }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

//Código omitido
// exibirTextoNaTela('h1', 'Jogo do número secreto');
// exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e ' + numeroLimite); I
}

let numeroSecreto = gerarNumeroAleatorio();

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns! Você Acertou.');
        let palavraTentativas = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + ' ' + palavraTentativas;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor.');
        }else {
            exibirTextoNaTela('p', 'O número é maior.');
        }
        limparCampo();
        tentativas++;
    }
}

function reiniciarjogo(){
    document.getElementById('reiniciar').setAttribute('disabled', true);
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();   
}



