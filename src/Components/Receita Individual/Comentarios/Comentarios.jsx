import React from 'react';
import style from './Comentarios.module.css';
import Avaliacoes from './Avaliacoes/Avaliacoes';
import Comentar from './Comentar/Comentar';
import { useSelector } from 'react-redux';

const Comentarios = ({comentarios, setModalComentario, listaComentarios, setListaComentarios, authorReceita}) => {
  const username = useSelector((state)=> state.login.user.data?.username);
  const {data} = useSelector((state)=> state.login.user);
  const [podeComentar, setPodeComentar] = React.useState(true);

  function organizaData(data) {
    const partesDaData = data.split(/[- :]/);
    const ano = partesDaData[0];
    const mes = partesDaData[1];
    const dia = partesDaData[2];
    const hora = partesDaData[3];
    const minutos = partesDaData[4];
    const segundos = partesDaData[5];

    const dataFormatada = `${dia}/${mes}/${ano} às ${hora}:${minutos}:${segundos}`

    return dataFormatada;
  }

  React.useEffect(()=> {
    const novaLista = [];
    if(comentarios) {
      comentarios.forEach((elemento)=> {
        if(listaComentarios.findIndex((comentario) => comentario.comment_ID === elemento.comment_ID) === -1) {
          novaLista.push(elemento);
        }
      });
      setListaComentarios((listaComentarios)=> [...novaLista, ...listaComentarios]);
    }
  }, [comentarios, setListaComentarios]);

  React.useEffect(()=> {
    function loopList() {
      data ?
        listaComentarios.some((elemento)=> elemento.comment_author === username) ?
        setPodeComentar(false) :
        authorReceita === username ? setPodeComentar(false) : setPodeComentar(true)
      :
      setPodeComentar(false);
    }

    loopList();
  }, [listaComentarios, authorReceita, username, data]);

  if(comentarios === null) return null;

  return (
    <div className={`${style.Comentarios} animaTop`}>
      <div className={listaComentarios.length > 0 ? style.titulo : style.tituloSemComentarios}>
        <h2>Comentários <strong>{`(${listaComentarios.length})`}</strong></h2>
      </div>
      <div className={style.contentComentarios}>
        {listaComentarios.length > 0 ? 
        listaComentarios.map((comentario)=>
          <div key={comentario.comment_ID} className={style.comentario}>
            <img src={`${comentario.foto_perfil ? comentario.foto_perfil : "../../../../public/Images/pngs/User.svg"}`} alt="Imagem perfil usuário" />
            <div className={style.comentarioInfo}>
              <div>
                <div className={style.nomeAvaliacao}>
                  <h3>{comentario.display_name}</h3>
                  <Avaliacoes avaliacao={comentario.comment_karma} />
                  {username === comentario.comment_author ? <button className={style.editarComentario} onClick={()=> setModalComentario((modalComentario) => !modalComentario)}>
                    <span></span>
                  </button> : ''}
                </div>
                <p className={style.dataComentario}>postado em {organizaData(comentario.comment_date)}</p>
              </div>
              <p>{comentario.comment_content}</p>
            </div>
          </div>
        ):
          <p className={style.semComentarios}>Ainda não há comentários...</p>
        }
      </div>
      {podeComentar && <Comentar setListaComentarios={setListaComentarios} />}
      {!data && !podeComentar && 
        <p style={{marginTop: "1rem"}}>
          Faça 
          <a href='/login' style={{margin: "4px", color: "var(--links-externos)"}}>
            login
          </a>
          para avaliar esta receita!
        </p>
      }
    </div>
  )
}

export default Comentarios;