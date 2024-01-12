import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Button from '../../Helper/Button/Button';
import Titulo from '../Helper/Titulo';
import style from './PagLogin.module.css';
import Input from '../../Helper/Input/Input';
import Head from '../../Helper/Head/Head';
import { useValidate } from '../../../Hooks/useValidate';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetarErro } from '../../../store/reducers/login';
import Account from '../../Account/Account';
import Error from '../../Helper/Error/Error';

const PagLogin = () => {
  const usuario = useValidate();
  const senha = useValidate();
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state)=>state.login.token);
  const carregando = useSelector((state)=>state.login.user.loading);
  const [novaMensagemErro, setNovaMensagemErro] = React.useState(null);

  function handleLogin(event) {
    event.preventDefault();
    if(usuario.validate() && senha.validate()) {
      dispatch(login({username: usuario.data, password: senha.data}));
    }
  }

  React.useEffect(()=> {
    let tempoErro;
    if(error) {
      const palavras = ["<strong>", "</strong>", '.<a href="http://foodfyapi.local/wp-login.php\\?action=lostpassword">Perdeu a senha\\?</a>'];
      const regex = new RegExp(palavras.join("|"), "g");
      const novaMensagemErro =  error.replace(regex, "");
      tempoErro = setTimeout(()=> {
        setNovaMensagemErro(null);
        dispatch(resetarErro());
      }, 3000);
      setNovaMensagemErro(novaMensagemErro);
    }

    return () => {
      clearTimeout(tempoErro);
      dispatch(resetarErro());
    }
  }, [error, dispatch]);

  return (
    <div className={style.contentPagLogin}>
      <div className={`${style.login} animaLeft`}>
        <Head titulo="Login" descricao="Faça seu login"/>
        <Titulo titulo="Login"/>
        <form onSubmit={handleLogin}>
          <Input tipo="text" label="Usuário" {...usuario} required />
          <Input tipo="password" label="Senha" estilo={{marginTop: "24px"}} {...senha} required/>
          {novaMensagemErro && <Error mensagem={novaMensagemErro} />}
          
          {loading || carregando 
          ? <Button nome="Carregando..." estilo={{padding: "12px 36px", opacity: '.7'}}/> 
          : <Button nome="Entrar" estilo={{padding: "12px 36px"}}/>
          }
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