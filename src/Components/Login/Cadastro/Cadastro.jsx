import Head from '../../Helper/Head/Head';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import Titulo from '../Helper/Titulo';
import style from './Cadastro.module.css';
import { useValidate } from '../../../Hooks/useValidate';

const Cadastro = () => {
  const nome = useValidate();
  const sobrenome = useValidate();
  const usuario = useValidate();
  const email = useValidate('email');
  const senha = useValidate('password');

  return (
    <form className={`${style.Cadastro} animaLeft`} onSubmit={(event)=> event.preventDefault()}>
      <Head titulo="Cadastro" descricao="Faça seu cadastro" />
      <Titulo titulo="Cadastro"/>
      <Input tipo="text" label="Nome" required {...nome}/>
      <Input tipo="text" label="Sobrenome" required {...sobrenome}/>
      <Input tipo="text" label="Usuário" required {...usuario}/>
      <Input tipo="email" label="E-mail" required {...email}/>
      <Input tipo="password" label="Senha" required {...senha}/>
      <Button nome="Cadastrar" />
    </form>
  )
}

export default Cadastro