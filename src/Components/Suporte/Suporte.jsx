import style from './Suporte.module.css';
import Head from '../Helper/Head/Head';
import Input from '../Helper/Input/Input';
import Button from '../Helper/Button/Button';
import estiloInput from '../Helper/Input/Input.module.css';
import SocialMedia from '../Helper/SocialMedia/SocialMedia';

const Suporte = () => {
  return (
    <section className={`${style.Suporte} animaLeft`}>
      <Head titulo="Suporte" descricao="Envie uma dúvia ou sugestão" />
      <div className={`${style.SuporteContent} spaceContent`}>
      <h1>Dúvidas & Sugestões</h1>
        <div className={style.Informacoes}>
          <h2>Suporte Online</h2>
          <div className={style.contatos}>
            <div className={style.contato}>
              <img src="../../../public/Images/icons/Suporte/Telefone.svg" alt="Telefone" />
              <h3>Telefone</h3>
              <p>83 4002-8922</p>
            </div>
            <div className={style.contato}>
            <img src="../../../public/Images/icons/Suporte/Email.svg" alt="E-mail"/>
              <h3>E-mail Comercial</h3>
              <p>foodfy@email.com</p>
            </div>
            <div className={style.contato}>
            <img src="../../../public/Images/icons/Suporte/Whatsapp.svg" alt="Whatsapp" />
              <h3>Whatsapp</h3>
              <p>83 9999-9999</p>
            </div>
          </div>
          <SocialMedia/>
        </div>
        <form action="">
          <Input label="Nome Completo" tipo="text" placeholder="Seu nome" />
          <Input label="E-mail" tipo="email" placeholder="seuemail@email.com"/>
          <Input label="Assunto" tipo="text" placeholder="Sobre o que se trata?"/>
          <label className={estiloInput.Label} htmlFor="mensagem">
            Mensagem
            <textarea className={`${estiloInput.Input}`} id='mensagem' placeholder="Conte-nos sua dúvida ou sugestão..."/>
          </label>
          <Button nome="Enviar Mensagem" />
        </form>
      </div>
    </section>
  )
}

export default Suporte;