/*function sum(num1 = 7, num2 = 23) {
    const result = num1 + num2
    return result  // o return sempre tem que ser a ultima coisa da função pois ele vai retornar o resulatado

}
const result = sum(10, 20)
console.log(result + " resultado")
*/

/*const carr = [10, 2, 29, 59, 100, 76, 250]

const comDesconto = carr.map(item => item * 0.9)// a função Ela serve para transformar cada item de um array e criar um novo array com os resultados.
//nesse caso ela aplica o desconto de 10% em cada item e ja cria um novo array com os resultados
console.log(comDesconto)*/ 
//const nome = name => `seu nome é ${name}` // -> issp aqui e uma arrow functions ela funciona normal que nem uma function normal, elas é a mesma coisa so que uma é mais nova que a outra
//console.log(nome('maria'))

/*const number = ['10', '2', '30', '59', '100', '76', '250']
const multi = number.map((mama) => { // esse aqui vai forma um nova array fazendo que os numero que ta dentro da variavel se tornem outros numeros
    return mama *  2
} )
console.log(multi ) // mostra o array com os numeros dobrados
console.log(number) // mostra o array original que nao foi alterado*/


const number = [110, 230, 34,412,321,123,100] 
const multi = number.map(item => item * 2) // esse map ta simplificado diferente do anterior la de cima,ele nao precisa usar o return pois ele usando (=>) ele ja retorna o resultado. so que o primeiro usa o return que vai ser a mesma coisa.
console.log(multi)
