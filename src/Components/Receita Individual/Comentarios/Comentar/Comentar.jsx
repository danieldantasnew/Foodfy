import React from 'react';
import style from './Comentar.module.css';
import styleInput from '../../../Helper/Input/Input.module.css';

const Comentar = () => {
  const [estrelaAtiva, setEstrelaAtiva] = React.useState(0);
  const [value, setValue] = React.useState(null);

  function handleComment(event) {
    event.preventDefault();
    //Antes de enviar o comentário, verificar se foi enviada a avaliação (se value é igual a null), se sim então não será possível enviar pois a avaliação será obrigatória.
    console.log('Enviar')
  }

  function handleAvaliacao(index) {
    setEstrelaAtiva(index);
    setValue(index+1);
  }

  return (
    <form className={style.Comentar} onSubmit={handleComment}>
      <div className={style.formAvaliacao}>
        <h3>O que você achou desta receita?</h3>
        <ul>
          {Array.from({length: 5}, (_, index)=> (
            <div key={index} className={`${style.estrelasCheias} ${estrelaAtiva === index ? style.estrelaAtivo : ''}`} onClick={()=> handleAvaliacao(index)}></div>
          ))}
        </ul>
        {value === 1 ? <div>Péssima</div> : value === 2 ? <div>Regular</div> : value === 3 ? <div>Boa</div> : value === 4 ? <div>Ótima</div> : value === 5 ?<div>Excelente</div> : ''}
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