import { Link } from "react-router-dom"

export const BtnLogin = ({Header2, btnLogin}) => {
  return (
    <div className={Header2}>
          <div><img src="../../../public/Images/icons/De uso Geral/busca.svg" alt="Buscar" /></div>
          <button className={btnLogin}><Link to="/login">Login</Link></button>
      </div>
  )
}
