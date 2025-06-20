//for (let a = 0; a < 15; a++){ // ele vai de 0 a 14 quando chega no 14 ele para por conta que ele  vai ver que o i e menor que 15
   // console.log(a)
//}
const nome = ["maria", "joao", "pedro", "jose", "marcos","maria", "joao", "pedro", "jose", "marcos","maria", "joao", "pedro", "jose", "marcos"]
for (const i of nome) { // o for of vai percorrer o array, mais desse jeito aqui tbm funciona do mesmo jeito do outro ex: for(let i = 0; i < nome.length; i++){
    console.log(i) // of ele coloca todos os nomes no console, e o in coloca os numero no console
}
   // pra poder pegar qualquer coisa dentreo da variaves da pra usar assim :console.log(user[nome-> esse name vai pegar qualquer um que quiser porem se coloca o maria vai pega so ele,"maria"]) -> isso é a mesma coisa do console.log(users.nome)
// for const jek in nome -> ele vai pegar todos os nomes que estão dentro da varieavel nome 