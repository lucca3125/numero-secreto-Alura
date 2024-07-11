let listaNumerosSorteados = [];
let qtdeNumero = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;
function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
function exibirMensagemInicial() {
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTexto('p', 'O número secreto é menor.');
    } else {
        exibirTexto('p', 'O número secreto é maior.');
    }
    tentativas++;
    limparCampo();
}
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * qtdeNumero + 1);
    let tamanhoLista = listaNumerosSorteados.length;

    if (tamanhoLista == qtdeNumero) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}