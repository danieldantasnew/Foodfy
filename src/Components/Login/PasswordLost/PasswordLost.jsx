import style from './PasswordLost.module.css';
import Titulo from '../Helper/Titulo';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import Head from '../../Helper/Head/Head';
import { useValidate } from '../../../Hooks/useValidate';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error/Error';
import { PASSWORD_LOST } from '../../../Api';

const PasswordLost = () => {
  const usuario = useValidate();
  const {carregando, dados, erro, request} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if(usuario.validate()) {
      const {url, options} = PASSWORD_LOST({
        login: usuario.data,
        url: window.location.href.replace('passwordLost', 'reset'),
      });
      const {response} = await request(url, options);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${style.PasswordLost} animaLeft`}>
      <Head titulo="Esqueci minha senha" descricao="Faça o reset de sua senha"/>
      <Titulo titulo="Recupere sua conta" />
      <Input tipo="text" label="Usuário / Login" required {...usuario}/>
      {carregando ? <Button nome="Enviando..." disabled estilo={{opacity: ".5"}}/> : <Button nome="Enviar Email" />}
      {dados && <p style={{color: 'green', marginTop: '1rem'}}>{dados}</p>}
      {erro && <Error mensagem={erro}/>}
    </form>
  )
}

export default PasswordLost;