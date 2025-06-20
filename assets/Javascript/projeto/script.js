function maoClicada(mao) {
    alert(`Você escolheu: ${mao}`);
    console.log(mao)
    for (const element of maos) {
        if (mao == element.mao) {
            console.log(element.pontuacao);
            document.querySelector('span').innerHTML = element.pontuacao;
            encontro = true
        } break

    } if (!encontro) {
        document.querySelector('span').innerHTML = '0';
    }


} add mais um no asim o m++1