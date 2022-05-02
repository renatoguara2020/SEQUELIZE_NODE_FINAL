const express = require('express')
const app = express()
const port = 4200

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/contatos/:id', (req, res) => {
    const id = req.params.id;

  return res.json({
       'id': 3,
      'nome': 'Renato Alves Soares',
      'email': 'renatoguara2020@gmail.com',
      'job': 'Analista de Sistemas',
      'idade': 50

  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})