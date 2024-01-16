import { NavLink, useLocation, useParams } from 'react-router-dom';
import style from './UsuarioLogado.module.css';
import React from 'react';
import { logOut } from '../../../store/reducers/login';
import { useDispatch } from 'react-redux';
import {ReactComponent as Recipes} from '../../../../public/Images/icons/De uso Geral/Receitas.svg';
import {ReactComponent as Stats} from '../../../../public/Images/icons/De uso Geral/Estatísticas.svg';
import {ReactComponent as PostRecipe} from '../../../../public/Images/icons/De uso Geral/adicionar nova receita.svg';
import {ReactComponent as LogOut} from '../../../../public/Images/icons/De uso Geral/Sair.svg';

const UsuarioLogado = ({displayName}) => {
  const location = useLocation();
  const [menu, setMenu] = React.useState(false);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }

  React.useEffect(()=> {
    setMenu(false);
  }, [location.pathname])

  return (
    <>
    <div className={style.UsuarioLogado} onClick={()=> setMenu(!menu)}>
      {displayName}
      <img src="../../../../public/Images/pngs/UserLog.svg" alt="Foto perfil do usuário" />
      <div className={!menu ? style.dropDown : style.dropDownActive}>
        <img src="../../../../public/Images/icons/De uso Geral/ArrowDropdown.svg" alt="" />
      </div>
    </div>
    {menu &&
      <nav className={style.Menu}>
        <ul>
          <NavLink to='/conta' end>
            <li>
              <Recipes/>
              Minhas Receitas
            </li>
          </NavLink>
          <NavLink to='/conta/estatisticas'>
            <li className={style.strokeColor}>
              <Stats/>
              Estatísticas
            </li>
          </NavLink>
          <NavLink to='/conta/postar'>
            <li className={style.strokeColor}>
              <PostRecipe/>
              Postar Receita
            </li>
          </NavLink>
          <li onClick={handleLogOut}>
            <LogOut/>
            Sair
          </li>
        </ul>
      </nav>
    }
    </>
  )
}

export default UsuarioLogado;