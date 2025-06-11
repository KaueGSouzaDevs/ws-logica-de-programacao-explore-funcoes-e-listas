let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text
};

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}


function verificarChute() {

    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);


    // chute > randomNum ? alert('O número secreto é menor') : alert('O número secreto é maior');

    // if (chute == randomNum) {
    //     alert('Parabéns, você acertou o número secreto')
    // };
};


/*
var randomNum;
var numeroSecretoMaximo = 5000;

document.addEventListener('DOMContentLoaded', () => {
    alert('Boas vindas ao jogo do número secreto');

    randomNum = parseInt(Math.random() * numeroSecretoMaximo + 1);
})


function reiniciarJogo() {
    randomNum = parseInt(Math.random() * 5000 + 1);
    document.getElementById('container__input').value = '';
    document.getElementById('container__input').focus();
}
*/
