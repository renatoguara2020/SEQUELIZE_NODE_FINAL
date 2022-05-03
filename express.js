const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World com React JS!</h1>')
})

app.get('/contatos', (req, res) => {

  res.send('<h1>Visualizar contatos</h1>');
})

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;

  return res.json({
       'id': 3,
      'nome': 'Renato Alves Soares',
      'email': 'renatoguara2020@gmail.com',
      'job': 'Analista de Sistemas',
      'idade': 50,
      'hobbies': 'Estudar programação com React'

  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})