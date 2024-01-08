import React from 'react';
import style from './Comentarios.module.css';
import Avaliacoes from './Avaliacoes/Avaliacoes';

const Comentarios = ({comentarios}) => {
  React.useEffect(()=> {
    comentarios.sort((anterior, proximo)=> {
      let Anterior = new Date(anterior.comment_date);
      let Proxima = new Date(proximo.comment_date);

      return  Anterior - Proxima;
    });
  }, [comentarios]);

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

  return (
    <div className={`${style.Comentarios} animaTop`}>
      <div className={comentarios.length > 0 ? style.titulo : style.tituloSemComentarios}>
        <h2>Comentários <strong>{`(${comentarios.length})`}</strong></h2>
      </div>
      <div className={style.contentComentarios}>
        {comentarios.length > 0 ? 
        comentarios.map((comentario)=>
          <div key={comentario.comment_ID} className={style.comentario}>
            <img src="../../../../public/Images/pngs/User.svg" alt="" />
            <div className={style.comentarioInfo}>
              <div>
                <div className={style.nomeAvaliacao}>
                  <h3>{comentario.display_name}</h3>
                  <Avaliacoes avaliacao={comentario.comment_karma} />
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
    </div>
  )
}

export default Comentarios