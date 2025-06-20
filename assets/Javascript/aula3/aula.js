/*var c = 1 
do { // ele vai executar sem ver se e verdadeiro
    console.log(c)
    c++
} while (c <= 10) // while ele ve se é verdadeiro pra executar
*/
const nome = [  {
    nome: 'joao',
    telefone: '38998776754'
},
{
    nome: 'maria',
    telefone: '38998453213'
},
{
    nome: 'pedro',
    telefone: '21934564789'
},
{
    nome: 'ana',
    telefone: '38991593226'
},
{
    nome: 'lucas',
    telefone: '38999999999'
}
] 
nome.forEach((element, index,array) => { //O método .forEach() é usado para percorrer cada item de um array e executar uma função para cada elemento.
    //no forEach ele nao funciona com o break ent no caso e mais facil usar o for of e o for normal
    console.log(index, element) 
    console.log(array)
}); 