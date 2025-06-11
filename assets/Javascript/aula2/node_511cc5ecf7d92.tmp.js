/*const number = 23 
const number2 =  25
console.log(number >= number2) */

/*const senhadaconta = true
const senha2  = false
const senha3 = false
console.log(senhadaconta && senha2 && senha3) /*senhadaconta || senha2 || senha3
if(senhadaconta|| senha2 || senha3){
    console.log('senha válida')
}else{
    console.log('senha inválida')
} */

    /*estudando operadores  */
 
 /*const temp = 30
if(temp === 10){
    console.log('quente')
}else if(temp === 10){
    console.log('normal')
}else{
    console.log('frio')
}  */

/* operador ternario*/
// const sal = 2000
 //sal >= 1000 ? console.log('salario alto') : console.log('salario baixo')
 // if no ternario sal >= 1000 ? console.log('salario alto') ?
 //if/else no ternario sal < 1000 ? console.log('salario alto') : console.log('salario muito bom')?
 // else if no ternario sal < 1000 ? console.log('salario alto') : sal >= 1000 ? console.log('salario alto') : console.log('salario doido?')?

 // switch case controlador de fluxo e quase a mesma coisa de if/else so que ele controla um pouco mais e as coisas tem que ta certinho
/*const temperatura = 20
switch(temperatura){
    case 40:        
        console.log('quente')
        break
    case 20:
        console.log('normal')
        break
    case 5:
        console.log('frio')
        break
        default:
            console.log('nada')
       break
} */
//setimeout executa uma vez
// & setlnterval executa infinita vezes

setInterval(() => {
    console.log('ola')
}, 1000)