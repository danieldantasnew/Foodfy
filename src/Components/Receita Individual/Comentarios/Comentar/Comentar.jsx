import React from 'react';
import style from './Comentar.module.css';
import styleInput from '../../../Helper/Input/Input.module.css';

const Comentar = () => {

  function handleComment(event) {
    event.preventDefault();
    console.log('Enviar')
  }

  return (
    <form className={style.Comentar} onSubmit={handleComment}>
      <div className={style.formAvaliacao}>
        <h3>O que você achou desta receita?</h3>
        <ul>
          <li data-avaiacao="1"><img src='../../../../../public/Images/icons/Receita Individual/Estrela vazia.svg'/></li>
          <li data-avaiacao="2"><img src='../../../../../public/Images/icons/Receita Individual/Estrela vazia.svg' /></li>
          <li data-avaiacao="3"><img src='../../../../../public/Images/icons/Receita Individual/Estrela vazia.svg' /></li>
          <li data-avaiacao="4"><img src='../../../../../public/Images/icons/Receita Individual/Estrela vazia.svg' /></li>
          <li data-avaiacao="5"><img src='../../../../../public/Images/icons/Receita Individual/Estrela vazia.svg' /></li>
        </ul>
      </div>
      <div className={style.formComentar}>
        <textarea className={`${styleInput.Input} ${style.Textarea}`} placeholder='Comentar...'/>
        <button className={style.btnEnviar}>
          <img src="../../../../../public/Images/icons/Receita Individual/Enviar.svg" alt="Enviar" />
        </button>
      </div>
    </form>
  )
}

export default Comentar;