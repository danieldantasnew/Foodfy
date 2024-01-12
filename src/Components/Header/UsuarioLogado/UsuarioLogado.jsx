import style from './UsuarioLogado.module.css';
import { Link } from 'react-router-dom';

const UsuarioLogado = ({displayName}) => {
  return (
    <Link to='/conta'>
      <div className={style.UsuarioLogado}>
        {displayName}
        <img src="../../../../public/Images/pngs/UserLog.svg" alt="Foto perfil do usuário" />
      </div>
    </Link>
  )
}

export default UsuarioLogado;