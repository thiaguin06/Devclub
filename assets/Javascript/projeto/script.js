
let pontuacaoJogador = 0; // Variável para armazenar a pontuação do jogador
let pontuacaoComputador = 0; // Variável para armazenar a pontuação do computador

function maoClicada(maoJogador) {
    alert(`Você escolheu: ${maoJogador}`);
    console.log(`Jogador escolheu: ${maoJogador}`);

    // Opções disponíveis para o computador
    const opcoes = ['👊', '🖐', '✌️'];

    // Escolha aleatória do computador
    const maoComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    console.log(`Bart escolheu: ${maoComputador}`);

    // Exibe a escolha do computador
    alert(`Bart escolheu: ${maoComputador}`);
    // Determina o vencedor
    if (
        (maoJogador === '👊' && maoComputador === '✌️') ||
        (maoJogador === '🖐' && maoComputador === '👊') ||
        (maoJogador === '✌️' && maoComputador === '🖐')
    ) {
        // Jogador vence
        pontuacaoJogador += 1;
        alert('Você venceu!');
    } else if (maoJogador === maoComputador) {
        // Empate
        alert('Empate!');
    } else {
        // Computador vence
        pontuacaoComputador += 1;
        alert('Bart venceu!');
    }
    // Atualiza as pontuações na tela
    const pontuacaoJogadorElemento = document.getElementById('pontuacao-jogador');
    const pontuacaoComputadorElemento = document.getElementById('pontuacao-computador');
    pontuacaoJogadorElemento.textContent = pontuacaoJogador;
    pontuacaoComputadorElemento.textContent = pontuacaoComputador;
} // todo esse codigo ele ta funcionando da seguinte forma