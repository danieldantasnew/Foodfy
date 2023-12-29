import { Link } from "react-router-dom";
import style from './BtnLogin.module.css'; 

const BtnLogin = () => {
  return (
    <Link to="/login"><button className={style.btnLogin}>Login</button></Link>
  )
}

export default BtnLogin;