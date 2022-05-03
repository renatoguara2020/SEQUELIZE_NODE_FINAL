const express = require('express');
const app = express();
const port = 3000;


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
      'idade': 4
  });
});

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;

  return res.json({
       'id': 3,
      'nome': 'Renato Alves Soares',
      'email': 'renatoguara2020@gmail.com',
      'job': 'Analista de Sistemas',
      'idade': 50,
      'hobbies': 'Estudar programação com React, leitura de livros de Technology'

  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})