import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav> 
      <ul>
        <li><NavLink to="/sobre">Sobre</NavLink></li>
        <li><NavLink to="/suporte">Suporte</NavLink></li>
        <li><NavLink to="/receitas">Receitas</NavLink></li>
      </ul>
    </nav>
  )
}

export default Menu