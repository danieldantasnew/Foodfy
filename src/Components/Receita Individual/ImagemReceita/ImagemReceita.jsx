import React from 'react';
import style from './ImagemReceita.module.css';
import Avaliacoes from '../Comentarios/Avaliacoes/Avaliacoes';

const ImagemReceita = ({src, nome, media, totalComentarios, titulo }) => {
  return (
  <div className={style.imagem}>
    <img src={src} alt={nome} />
    <div className={style.avaliacao}>
      <Avaliacoes avaliacao={media} />
      <div className={style.media}>{media}{` (${totalComentarios})`}</div>
    </div>
    <h2 className={style.titulo}>{nome}</h2>
  </div>
  )
}

export default ImagemReceita;