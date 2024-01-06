import style from './PasswordLost.module.css';
import Titulo from '../Helper/Titulo';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import Head from '../../Helper/Head/Head';
import { useValidate } from '../../../Hooks/useValidate';

const PasswordLost = () => {
  const usuario = useValidate();

  return (
    <form onSubmit={(event)=> event.preventDefault()} className={`${style.PasswordLost} animaLeft`}>
      <Head titulo="Esqueci minha senha" descricao="Faça o reset de sua senha"/>
      <Titulo titulo="Recupere sua conta" />
      <Input tipo="text" label="Usuário / Login" required {...usuario}/>
      <Button nome="Enviar Email" />
    </form>
  )
}

export default PasswordLost;