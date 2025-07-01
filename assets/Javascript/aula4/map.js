/*const lista = [
    { name: 'rodolfo', vip: true },
    { name: 'maria', vip: false },
    { name: 'joao', vip: true },
    { name: 'jose', vip: false },
    { name: 'pedro', vip: true },
    { name: 'marcos', vip: false },
    { name: 'maria', vip: true },
    { name: 'joao', vip: false },

]
const nvlist = lista.map(item => {
    const novo = {
        name: item.name,
        color: item.vip ? 'green' : 'red'
    }
    return novo


})
console.log(nvlist) */

const studand = [
    {name: 'joao', nota: 8.5},
    {name: 'maria', nota: 6.3},
    {name: 'pedro', nota: 7.0},
    {name: 'jose', nota: 2.5},
    {name: 'marcos', nota: 1.5},
    {name: 'maria', nota: 5.5},
    {name: 'joao', nota: 9.5},
    {name: 'jose', nota: 10.5},
    {name: 'marcos', nota: 3.4},
   
]
const estudantesAprovados =  studand.map(item => {
    const novo = {
        name: item.name,
       status: item.nota >= 7 ? 'aprovado' : 'reprovado'
        
    }
    return novo
})
console.log(estudantesAprovados)     