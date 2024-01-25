import React from 'react';
import style from './Comentar.module.css';
import styleInput from '../../../Helper/Input/Input.module.css';
import useFetch from '../../../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { COMMENT_POST } from '../../../../Api';
import { useSelector } from 'react-redux';
import Error from '../../../Helper/Error/Error';

const Comentar = ({setListaComentarios}) => {
  const [estrelaAtiva, setEstrelaAtiva] = React.useState(0);
  const {erro, request} = useFetch();
  const {id} = useParams();
  const [value, setValue] = React.useState(null);
  const token = useSelector((state)=> state.login.token.data?.token);
  const [comentario, setComentario] = React.useState('');



  async function handleComment(event) {
    event.preventDefault();
    const {url, options} = COMMENT_POST({
      comment: comentario,
      avaliacao: value,
    }, id, token);

    const {response, json} = await request(url, options);
    if(response.ok) setListaComentarios((listaComentarios)=> [json, ...listaComentarios]);
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
        <textarea 
          className={`${styleInput.Input} ${style.Textarea}`} placeholder='Comentar...'
          value={comentario}
          onChange={({target})=> setComentario(target.value)}
        />
        <button className={style.btnEnviar}>
          <img src="../../../../../public/Images/icons/Receita Individual/Enviar.svg" alt="Enviar" />
        </button>
        {erro && <Error mensagem={erro} />}
      </div>
    </form>
  )
}

export default Comentar;