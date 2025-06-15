let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', { rate: 1.2 });
};



function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
};



exibirMensagemInicial();



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    };

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    };
};


function verificarChute() {
    let chute = document.querySelector('input').value;

    chute > numeroSecreto ? exibirTextoNaTela('p', 'O número secreto é menor') : exibirTextoNaTela('p', 'O número secreto é maior');

    let mensagemTentativa;
    tentativas > 1 ? mensagemTentativa = `Parabéns, você acertou o número secreto em ${tentativas} tentativas` : mensagemTentativa = `Parabéns, você acertou o número secreto em ${tentativas} tentativa`;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!');
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    };
    tentativas++;

    limparCampo();
};

function limparCampo() {
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
};



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    document.querySelector('input').value = '';
    document.querySelector('input').focus();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
};

