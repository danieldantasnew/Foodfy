import React from 'react';
import style from './Mobile.module.css'; 
import Menu from '../../Helper/Navigation/Menu';
import BtnLogin from '../btnLogin/BtnLogin';
import Modal from '../../Helper/Modal/Modal';
import { useLocation } from 'react-router-dom';

const Mobile = () => {

  const [menu, setMenu] = React.useState(false);
  let params = useLocation();

  React.useEffect(()=> {
    setMenu(false);
  }, [params]);

  return (
    <div>
      <div onClick={()=> setMenu(!menu)} className={style.btnMenuConfig}>
        <span className={style.btnMenu} id={style.ham1}></span>
        <span className={style.btnMenu} id={style.ham2}></span>
        <span className={style.btnMenu} id={style.ham3}></span>
      </div>
      {menu &&
      <>
        <Modal setFechar={setMenu}/>
        <div className={style.menuMobile}>
          <div onClick={()=> setMenu(!menu)} className={style.menuClose}><img src="../../../../public/Images/icons/De uso Geral/btn-menu-close.svg" alt="Fechar menu" /></div>
          <div className={style.contentMenu}>
            <div>Busca</div>
            <Menu/>
            <BtnLogin/>
          </div>
        </div>
      </> 
      }
    </div>
  )
}

export default Mobile;