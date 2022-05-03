const express = require('express');
const app = express();
const port = 3001;


app.use(express.json())
// Rotas para API e testes com Insomnia
app.get('/', (req, res) => {
  res.send('<h1>Hello World com React JS!</h1>')
});

app.get('/contatos', (req, res) => {

  // res.send('<h1>Visualizar contatos com React JS</h1>');
  res.json({
      'nome': 'Nathan Barbosa Soares',
      'email': 'nathan2020@gmail.com',
      'job': 'Analista de Sistemas',
      'idade': 4,
  });
});

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;

  return res.json({
       'id': 5,
      'nome': 'Renato Alves Soares',
      'email': 'renatoguara2020@gmail.com',
      'job': 'Analista de Sistemas',
      'idade': 50,
      'hobbies': 'Estudar programação com React, leitura de livros de Technology'

  });
});

app.post("/contato", (req, res) => {
  var nome = req.body.nome;
  var email  = req.body.email;
  //Implementar a regra para salvar no banco de dados
  return res.json({
      nome,
      email
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})