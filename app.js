// let numeroSecreto = gerarNumeroAleatorio();
let numeroSecreto = 5;
let tentativas = 1;
// let chute=5


function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;


}




function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}




function verificarChute() {
        let chute = document.querySelector('input').value;
        
        if (chute == numeroSecreto) {
                exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
                exibirTextoNaTela('p', mensagemTentativas);
                 document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
                if (chute > numeroSecreto) { exibirTextoNaTela ('p', '0 número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo()
        }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}



function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto'); 
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); I
}

exibirMensagemInicial()


