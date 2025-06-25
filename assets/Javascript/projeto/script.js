
let pontuacaoJogador = 0; // Variável para armazenar a pontuação do jogador
let pontuacaoComputador = 0; // Variável para armazenar a pontuação do computador

function maoClicada(maoJogador) { // essa função toda vez que eu aperta uma mão vai aparece na tela qual que eu escolhi.
    alert(`Você escolheu: ${maoJogador}`);
    console.log(`Jogador escolheu: ${maoJogador}`);

    // Opções disponíveis para o computador
    const opcoes = ['👊', '🖐', '✌️'];

    // Escolha aleatória do computador
    const maoComputador = opcoes[Math.floor(Math.random() * opcoes.length)];// esse aqui ta sorteando tudo aleatoriamente na funçaõ do random   
    console.log(`Bart escolheu: ${maoComputador}`);

    // Exibe a escolha do computador
    alert(`Bart escolheu: ${maoComputador}`);
    // Determina o vencedor
    if (
        (maoJogador === '👊' && maoComputador === '✌️') || // esse if ta funcionando trocando os valores da mão.
        (maoJogador === '🖐' && maoComputador === '👊') ||
        (maoJogador === '✌️' && maoComputador === '🖐')
    ) {
        // Jogador vence
        pontuacaoJogador += 1;// aqui ta adicionando 1 na pontuação do jogador, que ele ganha do bart.
        alert("Você venceu!");
    } else if (maoJogador === maoComputador) {
        // Empate
        alert("Empate!");
    } else {
        // Computador vence
        pontuacaoComputador += 1;// aqui ta adicionando 1 na pontuação do computador, toda vez que ele ganha de do outro jogador.
        alert("Bart venceu!");
    }
    // Atualiza as pontuações na tela
    const pontuacaoJogadorElemento = document.getElementById('pontuacao-jogador');//ta pegando o span la do html e colocando o valor da variavel la em cima.
    const pontuacaoComputadorElemento = document.getElementById('pontuacao-computador');// ta pegando o span la do html e colocando o valor da variavel la em cima.
    pontuacaoJogadorElemento.textContent = pontuacaoJogador;
    pontuacaoComputadorElemento.textContent = pontuacaoComputador;
} 
function reiniciarJogo() { // essa function ta servindo pra reiniciar o jogo pra zerar a pontuação de cada jogador.
    pontuacaoJogador = 0;
    pontuacaoComputador = 0;
    document.getElementById('pontuacao-jogador').textContent = pontuacaoJogador;
    document.getElementById('pontuacao-computador').textContent = pontuacaoComputador;
    document.getElementById('resultado').textContent = '';
}

// esse codigo funciona da seguinte forma, toda vez que ele eu aperta em uma mao,ele vai mostra com um alert na tela qual que eu escolhi,em seguida vai aparecer um alert na tela com a escolha do bart, e depois vai aparecer na tela se o jogador ganhou ou perdeu ou se foi um empate, e vai aparecer a pontuação do jogador e da maquina.