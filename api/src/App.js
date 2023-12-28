import express from 'express';
import conexao from '../infra/conexao.js';
const app = express();

app.use(express.json());

app.get('/receitas', (req, res)=> {
  const sql = "SELECT * FROM receitas;"
  conexao.query(sql, (erro, resultado) => {
    if(erro) {
      res.status(404).json({'erro': erro});
    }
    else {
      res.status(200).json(resultado);
    }
  })
});

app.get('/receitas/:id', (req, res)=> {
  const id = req.params.id;
  const sql = "SELECT * FROM receitas WHERE id=?;"
  conexao.query(sql, id, (erro, resultado) => {
    const linha = resultado[0];
    if(erro) {
      res.status(404).json({'erro': erro});
    }
    else {
      res.status(200).json(linha);
    }
  })
});

app.post('/receitas', (req, res)=> {
  const receita = req.body;
  const sql = "INSERT INTO receitas SET ?;"
  conexao.query(sql, receita, (erro, resultado) => {
    if(erro) {
      res.status(400).json({'erro': erro});
    }
    else {
      res.status(201).json(resultado);
    }
  })
});

app.delete('/receitas/:id', (req, res)=> {
  const id = req.params.id;
  const sql = "DELETE FROM receitas WHERE id=?;";
  conexao.query(sql, id, (erro, resultado) => {
    if(erro) {
      res.status(404).json({'erro': erro});
    }
    else {
      res.status(200).json(resultado);
    }
  })
});

app.put('/receitas/:id', (req, res)=> {
  const receita = req.body;
  const id = req.params.id;
  const sql = "UPDATE receitas SET ? WHERE id=?;"
  conexao.query(sql, [receita, id], (erro, resultado) => {
    if(erro) {
      res.status(400).json({'erro': erro});
    }
    else {
      res.status(200).json(resultado);
    }
  })
});

export default app;
