import React from 'react';
import style from './Dim.module.css';

const Dim = ({descricao, ingredientes, modoPreparo}) => {
  const[modoDePreparo, setModoDePreparo] = React.useState(null);
  const[ingredientesFormatado, setIngredientesFormatado] = React.useState(null);

  React.useEffect(()=> {
    if(modoPreparo) {
      const organizaModoPreparo = modoPreparo.split('.');
      organizaModoPreparo.pop();
      setModoDePreparo(organizaModoPreparo);
    }

    if(ingredientes) {
      const organizaIngredientes = ingredientes.split('.');
      setIngredientesFormatado(organizaIngredientes);
      organizaIngredientes.pop();
    }
  }, [modoPreparo, setModoDePreparo, ingredientes]);

  return (
    <div className={style.Dim}>
      <div className={style.descricao}>
        <h2>Descrição</h2>
        <p>{descricao}</p>
      </div>
      <div className={style.ingredientes}>
        <h2>Ingredientes</h2>
        <ul>
          {ingredientesFormatado && ingredientesFormatado.map((ingrediente, index) =>
            <li key={index}>{ingrediente}</li>
          )}
        </ul>
      </div>
      <div className={style.modoPreparo}>
        <h2>Modo de Preparo</h2>
        <ol>
        {modoDePreparo && modoDePreparo.map((instrucao, index)=> 
          <li key={index}>{instrucao}</li>
        )}
        </ol>
      </div>
    </div>
  )
}

export default Dim;


//(DIM) Descrição, Ingredientes e Modo de Preparo