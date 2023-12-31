import React from 'react';
import estiloInput from '../Input/Input.module.css';
import style from './Busca.module.css';

const Busca = () => {
  return (
    <div className={`${style.Busca}`}>
      <label htmlFor="busca">
        <img src="../../../../public/Images/icons/Receitas/Busca.svg" alt="Ícone buscar uma receita" />
      </label>
      <input type='text' placeholder='Buscar uma receita' className={estiloInput.Input} id="busca" />
    </div>
  )
}

export default Busca