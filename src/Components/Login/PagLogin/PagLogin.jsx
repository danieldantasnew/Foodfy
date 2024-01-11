import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Helper/Button/Button';
import Titulo from '../Helper/Titulo';
import style from './PagLogin.module.css';
import Input from '../../Helper/Input/Input';
import Head from '../../Helper/Head/Head';
import { useValidate } from '../../../Hooks/useValidate';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/login';

const PagLogin = () => {
  const usuario = useValidate();
  const senha = useValidate();

  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(login({username: 'daniel', password: "daniel123"}));
  }, [dispatch]);

  return (
    <div className={style.contentPagLogin}>
      <div className={`${style.login} animaLeft`}>
        <Head titulo="Login" descricao="Faça seu login"/>
        <Titulo titulo="Login"/>
        <form onSubmit={(event)=> event.preventDefault()}>
          <Input tipo="text" label="Usuário" {...usuario} required />
          <Input tipo="password" label="Senha" estilo={{marginTop: "24px"}} {...senha} required/>
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