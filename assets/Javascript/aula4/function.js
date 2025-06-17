/*function som(a, b) {
   console.log(a * 2 / b);
}
som(10, 20);
som(20, 30);
som(30, 40); */ // calculadora basica que pode fica brincando com os numeros que vc quiser somando cada um entre eles. 


/*function nome (name = 'desconhecido') { // se dentro da funçao que voce coloco nao tiver um nome, ele vai receber o desconhecido por conta que ele esta sendo passado como parametro, pq na funçao nao tem nome ou coisa do tipo.
    console.log(name);
}
nome('maria'); // se isso aqui tiver com o um nome a funçao vai receber esse nome que colocou caso nao tiver vai recerber o desconhecido.
*/

function sum(num1 =7, num2 =23) { // aqui é a mesma situção de cima eu coloqueo um valor padrão para num1 e num2 caso a minha função la embaixo não tiver um valor o num1 vai ser 7 e o num2 vai ser 23, ai no console vai somar e aparecer o resultado,mais se minha função tiver um valor nela esse num1 e num2 vai acabar sendo ignorado.
    console.log(num1 / num2);
}
sum(10, 5);
sum(20, 16 );
sum(30, 18);