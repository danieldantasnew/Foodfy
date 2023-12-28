import app from './App.js';
import conexao from '../infra/conexao.js'

const PORT = 3000;

conexao.connect((erro)=> {
  if(erro) {
    console.log('Conexão falhou!', erro);
  } else {
    console.log('Conexão realizada com sucesso!');
    app.listen(PORT, ()=> {
      console.log(`Servidor rodando na porta http://localhost:${PORT}`)
    });
  }
});

