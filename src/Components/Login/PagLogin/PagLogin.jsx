import { Link } from 'react-router-dom';
import Button from '../../Helper/Button/Button';
import Titulo from '../Helper/Titulo';
import style from './PagLogin.module.css';
import Input from '../../Helper/Input/Input';
import Head from '../../Helper/Head/Head';

const PagLogin = () => {
  return (
    <div className={style.contentPagLogin}>
      <div className={`${style.login} animaLeft`}>
        <Head titulo="Login" descricao="Faça seu login"/>
        <Titulo titulo="Login"/>
        <form onSubmit={(event)=> event.preventDefault()}>
          <Input tipo="text" label="Usuário" required />
          <Input tipo="password" label="Senha" estilo={{marginTop: "24px"}} required/>
          <Button nome="Entrar" estilo={{padding: "12px 36px"}}/>
          <div className={style.esqueceuSenha}><Link to="passwordLost">Esqueci minha senha</Link></div>
        </form>
        <div className={style.cadastro}>
          <h2>Cadastre-se </h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to="cadastro"><Button nome="Cadastro" estilo={{marginTop: "0px"}} /></Link>
        </div>
      </div>
    </div>
  )
}

export default PagLogin;