import React from 'react';
import style from './Header.module.css';
import Menu from '../Helper/Navigation/Menu';
import Logo from '../Helper/Logo/Logo';
import useMedia from '../../Hooks/useMedia';
import BtnLogin from './btnLogin/BtnLogin';
import Mobile from './Mobile/Mobile';
import { useSelector } from 'react-redux';
import UsuarioLogado from './UsuarioLogado/UsuarioLogado';
import Modal from '../Helper/Modal/Modal';
import Profile from '../Account/Profile/Profile';

const Header = () => {
  const mobile = useMedia("(max-width: 34.375rem)");
  const logado = useSelector((state)=> state.login.user.data);
  const [editarPerfil, setEditarPerfil] = React.useState(null);

  return (
    <header>
      {editarPerfil &&
        <>
          <Modal setFechar={setEditarPerfil} />
          <Profile setEditarPerfil={setEditarPerfil}/>
        </>
      }
      <section className={`${style.Header} spaceContent`} style={mobile ? {justifyContent: 'start'} : {justifyContent: 'space-between'}}>
        <div className={mobile ? style.Header1Mobile : style.Header1}>
          <Logo/>
          {mobile ? 
            <Mobile setEditarPerfil={setEditarPerfil}/> : 
            <Menu/>
          }
        </div>
      {!mobile &&
        <div className={style.Header2}>
          <div>
            <img src="../../../public/Images/icons/De uso Geral/busca.svg" alt="Buscar" />
          </div>
          {logado ?
          <UsuarioLogado displayName={logado.first_name} setEditarPerfil={setEditarPerfil}/> :
          <BtnLogin />}
        </div>        
      }
      </section>
    </header>
  )
}

export default Header;