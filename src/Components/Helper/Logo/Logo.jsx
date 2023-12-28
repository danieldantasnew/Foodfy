import { Link } from 'react-router-dom';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <div><Link to="/"><img className={style.logo} src="../../../../public/Images/logo/Foodfy.svg" alt="Logo-Início" /></Link></div>
  )
}

export default Logo