import React from 'react';
import style from './ImagemReceita.module.css';

const ImagemReceita = ({src, nome }) => {
  return (
  <div className={style.imagem}>
    <img src={src} alt={nome} />
  </div>
  )
}

export default ImagemReceita