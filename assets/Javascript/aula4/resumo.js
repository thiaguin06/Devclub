/* 🔹 filter()

Serve para filtrar elementos de um array com base em uma condição.

Retorna um novo array apenas com os elementos que passaram no teste.

Exemplo: pegar números maiores que 5. 
const numeros = [1, 4, 6, 8, 3, 7];
const maioresQue5 = numeros.filter(num => num > 5); 
console.log(maioresQue5) */

/* 🔹 map()


Serve para transformar cada elemento de um array, criando um novo array com o mesmo número de itens.

Útil para aplicar alguma mudança em cada elemento.

Exemplo: Dividi todos os números por 2. 
const number = [110, 230, 34,412,321,123,100] 
const multi = number.map(item => item / 2) //
console.log(multi) */
 /* 🔹 reduce()

Serve para reduzir o array a um único valor (número, objeto, string, etc.).

Percorre todos os elementos acumulando um resultado.

Exemplo: somar todos os valores do array.
const num = [ 1,2,3,4,5,6,7,8,9,10 ]
const sum = num.reduce((acumulador, valoratual) =>{ 
    return acumulador + valoratual
}, 0)
console.log(sum) */

// 🔎 Resumo

// filter() -> filtrar elementos de um array com base em uma condição
// map() -> transformar cada elemento de um array, criando um novo array com o mesmo número de itens
// reduce() -> reduzir o array a um único valor
