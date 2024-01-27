import React from 'react';
import style from '../Comentar.module.css';
import stylesInternal from './EditarComentario.module.css';
import styleInput from '../../../../Helper/Input/Input.module.css';
import useFetch from '../../../../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from '../../../../Helper/Error/Error';

const EditarComentario = ({setListaComentarios}) => {
  const [estrelaAtiva, setEstrelaAtiva] = React.useState(0);
  const {erro, request} = useFetch();
  const {id} = useParams();
  const [value, setValue] = React.useState(null);
  const token = useSelector((state)=> state.login.token.data?.token);
  const [comentario, setComentario] = React.useState('');



  async function handleComment(event) {
    event.preventDefault();
  }

  function handleAvaliacao(index) {
    setEstrelaAtiva(index);
    setValue(index+1);
  }

  return (
    <form className={stylesInternal.Comentar} >
      <div className={stylesInternal.conteudo} onSubmit={handleComment}>
        <h2>Editar Comentário</h2>
        <div className={style.formAvaliacao}>
          <h3>O que você achou desta receita?</h3>
          <ul>
            {Array.from({length: 5}, (_, index)=> (
              <div key={index} className={`${style.estrelasCheias} ${estrelaAtiva === index ? style.estrelaAtivo : ''}`} onClick={()=> handleAvaliacao(index)}></div>
            ))}
          </ul>
          {value === 1 ? <div>Péssima</div> : value === 2 ? <div>Regular</div> : value === 3 ? <div>Boa</div> : value === 4 ? <div>Ótima</div> : value === 5 ?<div>Excelente</div> : ''}
        </div>
        <div className={stylesInternal.formComentar}>
          <textarea 
            className={`${styleInput.Input} ${style.Textarea}`} placeholder='Comentar...'
            value={comentario}
            onChange={({target})=> setComentario(target.value)}
          />
          <button className={style.btnEnviar}>
            <img src="../../../../../public/Images/icons/Receita Individual/Enviar.svg" alt="Enviar" />
          </button>
        </div>
        {erro && <Error mensagem={erro} />}
      </div>
    </form>
  )
}

export default EditarComentario;