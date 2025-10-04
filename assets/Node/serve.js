import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());
app.get('/usuarios', async (req, res) => {
const users =  await prisma.user.findMany()

  res.status(200).json(users)
})
  
app.post('/usuarios', async (req, res) => {
 const user = await prisma.user.create({

  data: {
    email: req.body.email,
    age: req.body.age,
    name: req.body.name,
  }

})
  res.status(201).json("Usuario criado com sucesso")
})
app.listen(3000);


app.put('/usuarios/:id', async (req, res) => {  // essa rota ela atualiza o usuario pelo id, tem que criar uma rota put, coloca o id e atualizar o que voce quer fazer.

   req.params.id
 const user = await prisma.user.update({
 
  where: { 
          id: req.params.id
   },

  data: {
    email: req.body.email,
    age: req.body.age,
    name: req.body.name,
  }

})
  res.status(201).json("Usuario criado com suceesso")
})



app.delete('usuarios/:id', async (req,res) => {
  await prisma.user.delete ({
where: {
  id:req.params.id 
}
    
  })
  req.status(200).json("Usuario deletado com sucesso")
})

app.listen(3000);





// res = response
// req = requisiçaõ
//http://localhost:3000/usuarios 

// lembrando toda vez que for fazer uma atualição em algum codigo voce tem que limpa o terminal abri um novo e rodar o comando node serve.js 
// lembra que sempre colocar o app em tudo
 // lembre-se que sempre para aparecer alguma coisa no servidor voce tem que colocar o app.listen(3000); 3000 é a porta que voce quer que o servidor rode 
// para rodar o servidor voce tem que colocar no terminal node serve.js
// esse codigo é o backend do site respondendo o frotend
// o navegador so pode acesar as rotas get, as outras ele não pode acessar
// : esse dois ponto funciona como uma variavel dentro de um usuario pra pegar o id dele 
//quando quiser pegar o route params de alguem voce tem que colocar o id do lado do usuario assim ex:usuarios/:thiago
