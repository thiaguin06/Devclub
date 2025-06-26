/*function sum(num1 = 7, num2 = 23) {
    const result = num1 + num2
    return result  // o return sempre tem que ser a ultima coisa da função pois ele vai retornar o resulatado

}
const result = sum(10, 20)
console.log(result + " resultado")
*/

const carr = [10, 2, 29, 59, 100, 76, 250]

const comDesconto = carr.map(item => item * 0.9)// a função Ela serve para transformar cada item de um array e criar um novo array com os resultados.
//nesse caso ela aplica o desconto de 10% em cada item e ja cria um novo array com os resultados
console.log(comDesconto) 
//const nome = name => `seu nome é ${name}` // -> issp aqui e uma arrow functions ela funciona normal que nem uma function normal, elas é a mesma coisa so que uma é mais nova que a outra
//console.log(nome('maria'))


   
    
