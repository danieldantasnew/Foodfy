import React from 'react';
import style from './MenuOpcs.module.css';

const MenuOpcs = ({setModal}) => {

  return (
    <div className={style.menuOpcs}>
      <ul>
        <li>
          <div onClick={()=> setModal((modal)=>!modal)}>
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
  )
}

export default MenuOpcs