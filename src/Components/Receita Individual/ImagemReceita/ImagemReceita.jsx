import React from 'react';
import style from './ImagemReceita.module.css';
import Avaliacoes from '../Comentarios/Avaliacoes/Avaliacoes';
import MenuOpcs from './MenuOpcs/MenuOpcs';
import { useSelector } from 'react-redux';

const ImagemReceita = ({src, nome, media, totalComentarios, setModal, author}) => {
  const [menu, setMenu] = React.useState(false);
  const logado = useSelector((state)=> state.login.user.data);
  const [donoReceita, setDonoReceita] = React.useState(false);

  React.useEffect(()=> {
    if(logado && author === logado.username) setDonoReceita(true);
    else setDonoReceita(false);
  }, [logado, author]);

  return (
  <div className={style.imagem}>
    <img src={src} alt={nome} />
    <div className={style.avaliacao}>
      <Avaliacoes avaliacao={media} />
      <div className={style.media}>{media}{` (${totalComentarios})`}</div>
    </div>
    <div className={donoReceita ? style.content1 : style.content1DonoReceita}>
      {donoReceita && 
        <div className={style.menu}>
        <button className={style.btnOpcs} onClick={()=> setMenu(!menu)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {menu && <MenuOpcs setModal={setModal} setMenu={setMenu}/>}
      </div>
      }
      <h2 className={style.titulo}>{nome}</h2>
    </div>
  </div>
  )
}

export default ImagemReceita;