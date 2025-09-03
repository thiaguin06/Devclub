import express from 'express'; 

const app = express();

app.get('/usuarios', (req, res) => {
  res.send('lista de assuarios');

  app.post('/usuarios', (req, res) => {
    res.send('criar um usuario');
  });

});
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