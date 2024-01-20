import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import { useValidate } from '../../../Hooks/useValidate';
import Button from '../../Helper/Button/Button';
import Error from '../../Helper/Error/Error';
import Head from '../../Helper/Head/Head';
import Input from '../../Helper/Input/Input';
import style from './Reset.module.css';

const Reset = () => {
  const password = useValidate('password');
  const {carregando, erro, dados, request} = useFetch();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    if(password.validate()) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const key = urlParams.get('key');
      const login = urlParams.get('login');
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.data, 
      });

      const {response} = await request(url, options); 
      if(response.ok) {
        setTimeout(()=> {
          navigate('/login');
        }, 2500);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${style.Reset} animaLeft spaceContent`}>
    <Head titulo="Esqueci minha senha" descricao="Faça o reset de sua senha"/>
      <Input label="Digite sua nova senha" tipo="password" {...password} />
      {carregando ? <Button nome="Alterando..." /> : <Button nome="Alterar senha" />}
      {dados && <p style={{marginTop: "1rem", color: "green"}}>{dados}</p>}
      {erro && <Error mensagem={erro}/>}
  </form>
  )
}

export default Reset;