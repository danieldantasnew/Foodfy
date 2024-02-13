import React from 'react';
import style from './Dim.module.css';

const Dim = ({descricao, ingredientes, modoPreparo}) => {

  return (
    <div className={style.Dim}>
      <div className={style.descricao}>
        <h2>Descrição</h2>
        <p>{descricao}</p>
      </div>
      <div className={style.ingredientes}>
        <h2>Ingredientes</h2>
        <ul>
          {ingredientes && ingredientes.map((ingrediente, index) =>
            <li key={index}>{ingrediente}</li>
          )}
        </ul>
      </div>
      <div className={style.modoPreparo}>
        <h2>Modo de Preparo</h2>
        <ol>
        {modoPreparo && modoPreparo.map((instrucao, index)=> 
          <li key={index}>{instrucao}</li>
        )}
        </ol>
      </div>
    </div>
  )
}

export default Dim;


//(DIM) Descrição, Ingredientes e Modo de Preparo