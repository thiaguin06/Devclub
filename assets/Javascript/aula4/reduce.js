/*const num = [ 1,2,3,4,5,6,7,8,9,10 ]
const sum = num.reduce((acumulador, valoratual) =>{ //O reduce pega todos os elementos do array e os combina em um único resultado (a soma, nesse caso), passando um acumulador de elemento em elemento.
    return acumulador + valoratual
}, 0)//meu array ta começando aparti desse 0 zero ele que ta começando a somar os numeros
console.log(sum) */

const cart = [
    {name: 'Caneta', price: 7.90 , quantity: 3},
    {name: 'Lapis', price: 3.90, quantity: 2},
    {name: 'Caderno', price: 13.90, quantity: 1},
    {name: 'Borracha', price: 4.90, quantity: 2},
]
const sum = cart.reduce((acumulador, item) => {
    return acumulador + item.price * item.quantity
}, 0)
console.log(sum)          