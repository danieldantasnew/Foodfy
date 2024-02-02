import { NavLink, useLocation } from 'react-router-dom';
import style from './UsuarioLogado.module.css';
import React from 'react';
import { logOut } from '../../../store/reducers/login';
import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Recipes} from '../../../../public/Images/icons/De uso Geral/Receitas.svg';
import {ReactComponent as Stats} from '../../../../public/Images/icons/De uso Geral/Estatísticas.svg';
import {ReactComponent as PostRecipe} from '../../../../public/Images/icons/De uso Geral/adicionar nova receita.svg';
import {ReactComponent as LogOut} from '../../../../public/Images/icons/De uso Geral/Sair.svg';

const UsuarioLogado = ({displayName, setEditarPerfil, setMenuMobile}) => {
  const location = useLocation();
  const [menu, setMenu] = React.useState(false);
  const perfil = useSelector((state)=> state.login.user.data.foto_perfil);
  const nomeCompleto = useSelector((state)=> state.login.user.data?.display_name);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
  }

  React.useEffect(()=> {
    setMenu(false);
  }, [location.pathname])

  function handleClick() {
    setEditarPerfil(true);
    setMenu(false);
    if(typeof setMenuMobile === 'function') setMenuMobile(false);
  }
 
  return (
    <>
    <div className={style.UsuarioLogado} onClick={()=> setMenu(!menu)}>
      {displayName}
      <img className={`${perfil ? style.usuarioComImagem : style.usuarioSemImagem}`} src={`${perfil ? perfil :"../../../../public/Images/pngs/UserLog.svg"}`} alt="Foto perfil do usuário" />
      <div className={!menu ? style.dropDown : style.dropDownActive}>
        <img src="../../../../public/Images/icons/De uso Geral/ArrowDropdown.svg" alt="" />
      </div>
    </div>
    {menu &&
      <nav className={style.Menu}>
        <div className={style.perfilMenu}>
          <div className={style.imagemBotao}>
            <img src={`${perfil ? perfil :"../../../../public/Images/pngs/UserLog.svg"}`} alt="Foto do perfil" className={`${perfil ? `${style.usuarioComImagem} ${style.perfil}` : style.usuarioSemImagem}`}/>
            <button onClick={handleClick}>
              <img src="../../../../public/Images/icons/De uso Geral/EditarPerfil.png" alt="Editar perfil" />
            </button>
          </div>
          <p>{nomeCompleto}</p>
        </div>
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