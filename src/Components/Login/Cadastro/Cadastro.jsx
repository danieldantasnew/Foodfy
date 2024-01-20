import Head from '../../Helper/Head/Head';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import Titulo from '../Helper/Titulo';
import style from './Cadastro.module.css';
import { useValidate } from '../../../Hooks/useValidate';
import useFetch from '../../../Hooks/useFetch';
import { USER_POST } from '../../../Api';
import Error from '../../Helper/Error/Error';
import { useDispatch } from 'react-redux';
import { login } from '../../../store/reducers/login';

const Cadastro = () => {
  const {carregando, erro, request} = useFetch();
  const nome = useValidate();
  const sobrenome = useValidate();
  const usuario = useValidate();
  const email = useValidate('email');
  const senha = useValidate('password');
  const dispatch = useDispatch();


  async function handleSubmit(event) {
    event.preventDefault();
    if(nome.validate() && sobrenome.validate() && usuario.validate() && email.validate() && senha.validate()) {
      const {url, options} = USER_POST({
        firstName: nome.data,
        lastName: sobrenome.data,
        username: usuario.data,
        email: email.data,
        password: senha.data,
      });

      const {response} = await request(url, options);
      if(response.ok) {
        dispatch(login({username: usuario.data, password: senha.data}));
      }
    }
  }

  return (
    <form className={`${style.Cadastro} animaLeft`} onSubmit={handleSubmit}>
      <Head titulo="Cadastro" descricao="Faça seu cadastro" />
      <Titulo titulo="Cadastro"/>
      <Input tipo="text" label="Nome" required {...nome}/>
      <Input tipo="text" label="Sobrenome" required {...sobrenome}/>
      <Input tipo="text" label="Usuário" required {...usuario}/>
      <Input tipo="email" label="E-mail" required {...email}/>
      <Input tipo="password" label="Senha" required {...senha}/>
      {carregando ? <Button nome="Cadastrando..." estilo={{opacity: ".5"}} disabled/> : <Button nome="Cadastrar" />}
      {erro && <Error mensagem={erro}/>}
    </form>
  )
}

export default Cadastro