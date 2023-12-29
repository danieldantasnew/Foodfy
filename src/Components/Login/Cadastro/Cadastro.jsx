import Head from '../../Helper/Head/Head';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import Titulo from '../Helper/Titulo';
import style from './Cadastro.module.css';

const Cadastro = () => {
  return (
    <form className={`${style.Cadastro} animaLeft`} onSubmit={(event)=> event.preventDefault()}>
      <Head titulo="Cadastro" descricao="Faça seu cadastro" />
      <Titulo titulo="Cadastro"/>
      <Input tipo="text" label="Nome" required/>
      <Input tipo="text" label="Sobrenome" required/>
      <Input tipo="text" label="Usuário" required/>
      <Input tipo="email" label="E-mail" required/>
      <Input tipo="password" label="Senha" required/>
      <Button nome="Cadastrar" />
    </form>
  )
}

export default Cadastro