import React from 'react';
import style from './Mobile.module.css'; 

const Mobile = () => {

  const [menu, setMenu] = React.useState(false);

  return (
    <div>
      <div onClick={()=> setMenu(!menu)} className={style.btnMenuConfig}><span className={style.btnMenu}></span></div>
      {menu && 
      <div className={style.menuMobile}>
        <div onClick={()=> setMenu(!menu)} className={style.menuClose}><img src="../../../../public/Images/icons/De uso Geral/btn-menu-close.svg" alt="" /></div>
      </div>}
    </div>
  )
}

export default Mobile;