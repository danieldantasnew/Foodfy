import React from 'react';
import style from '../Comentar.module.css';
import stylesInternal from './EditarComentario.module.css';
import styleInput from '../../../../Helper/Input/Input.module.css';
import useFetch from '../../../../../Hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Error from '../../../../Helper/Error/Error';
import { COMMENT_DELETE, COMMENT_PUT } from '../../../../../Api';

const EditarComentario = ({listaComentarios, setListaComentarios, setModalComentario}) => {
  const {erro, request} = useFetch();
  const {id} = useParams();
  const token = useSelector((state)=> state.login.token.data?.token);
  const {username} = useSelector((state)=> state.login.user.data);
  const [estrelaAtiva, setEstrelaAtiva] = React.useState(0);
  const [value, setValue] = React.useState(null);
  const [comentario, setComentario] = React.useState('');
  const [autorComentario, setAutorComentario] = React.useState(null);

  async function handleDelete() {
    const confirmaDelete = window.confirm('Deseja realmente deletar este Comentário/Avaliação?');
    if(confirmaDelete) {
      const {url, options} = COMMENT_DELETE({
        id: autorComentario['comment_ID']
      },
      id, token);
      const {response, json} = await request(url, options);
      if(response.ok) {
        window.alert(json);
        const lista = listaComentarios;
        const novaLista = lista.filter((comentario)=> comentario.user_id !== autorComentario.user_id);
        setListaComentarios([...novaLista]);
        setModalComentario(null);
      }
    }
  }

  async function handleComment(event) {
    event.preventDefault();

    const {url, options} = COMMENT_PUT({
      id: autorComentario['comment_ID'],
      comment: comentario,
      avaliacao: value,
    }, id, token);

    const {response} = await request(url, options);
    if(response.ok) {
      //Como o estado está apontado para o objeto (elemento) da listaComentarios, eu consigo modificar ele diretamente sem precisar criar uma cópia de suas propriedades, algo como setAutorComentario({...elemento}) pra só depois inserir na lista o novo conteudo das proriedades abaixo. Ou seja, ficou bem mais simples da forma atual.
      autorComentario['comment_content'] = comentario;
      autorComentario['comment_karma'] = value;
      setModalComentario(null);
    } 
    
  }

  function handleAvaliacao(index) {
    setEstrelaAtiva(index);
    setValue(index+1);
  }
  
  React.useEffect(()=> {
    listaComentarios.forEach((elemento) => {
      if(elemento.comment_author === username) {
        setComentario(elemento['comment_content']);
        setEstrelaAtiva((+elemento['comment_karma'])-1);
        setValue(+elemento['comment_karma']);
        setAutorComentario(elemento);
      }
    });
  }, [listaComentarios, username]);


  return (
    <form className={stylesInternal.Comentar} onSubmit={handleComment}>
      <div className={stylesInternal.conteudo}>
        <div className={stylesInternal.titulo}>
          <h2>Editar Comentário</h2>
          <img src="../../../../../../public/Images/icons/De uso Geral/Deletar.svg" alt="Deletar"  onClick={handleDelete}/>
        </div>
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