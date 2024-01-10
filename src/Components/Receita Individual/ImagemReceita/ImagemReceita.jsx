import React from 'react';
import style from './ImagemReceita.module.css';
import Avaliacoes from '../Comentarios/Avaliacoes/Avaliacoes';
import MenuOpcs from './MenuOpcs/MenuOpcs';

const ImagemReceita = ({src, nome, media, totalComentarios, setModal }) => {
  const [menu, setMenu] = React.useState(false);

  return (
  <div className={style.imagem}>
    <img src={src} alt={nome} />
    <div className={style.avaliacao}>
      <Avaliacoes avaliacao={media} />
      <div className={style.media}>{media}{` (${totalComentarios})`}</div>
    </div>
    <div className={style.content1}>
      <div className={style.menu}>
        <button className={style.btnOpcs} onClick={()=> setMenu(!menu)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menu && <MenuOpcs setModal={setModal} setMenu={setMenu}/>}
      </div>
      <h2 className={style.titulo}>{nome}</h2>
    </div>
  </div>
  )
}

export default ImagemReceita;