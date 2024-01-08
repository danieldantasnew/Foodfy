import React from 'react';
import style from './ImagemReceita.module.css';
import Avaliacoes from '../Comentarios/Avaliacoes/Avaliacoes';

const ImagemReceita = ({src, nome, media, totalComentarios }) => {
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
        {menu && 
        <div className={style.menuOpcs}>
          <ul>
            <li>
              <div>
                <img src="../../../../public/Images/icons/Receita Individual/Editar.svg" alt="Editar receita" />
                <p>Editar</p>
              </div>
            </li>
            <li className={style.delete}>
              <div>
                <img src="../../../../public/Images/icons/Receita Individual/Deletar.svg" alt="Deletar receita" />
                <p>Deletar</p>
              </div>
            </li>
          </ul>
        </div>
        }
      </div>
      <h2 className={style.titulo}>{nome}</h2>
    </div>
  </div>
  )
}

export default ImagemReceita;