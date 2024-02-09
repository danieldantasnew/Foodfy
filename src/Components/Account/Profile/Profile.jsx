import React, { useRef } from 'react';
import style from './Profile.module.css';
import Button from '../../Helper/Button/Button';
import Input from '../../Helper/Input/Input';
import {useValidate} from '../../../Hooks/useValidate';
import { useDispatch, useSelector } from 'react-redux';
import { USER_PUT } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import {fetchUser} from '../../../store/reducers/login';
import Error from '../../Helper/Error/Error';

const Profile = ({setEditarPerfil}) => {
  const [atualizado, setAtualizado] = React.useState(false);
  const nome = useValidate();
  const sobrenome = useValidate();
  const emailData = useValidate('email');
  const password = useValidate('password');
  const {foto_perfil, first_name, last_name, email} = useSelector((state)=> state.login.user.data);
  const[atualFotoPerfil, setAtualFotoPerfil] = React.useState(foto_perfil);
  const [alterarFoto, setAlterarFoto] = React.useState({});
  const refInputFoto = useRef();

  const dispatch = useDispatch();
  const {token} = useSelector((state)=> state.login.token.data);
  const {erro, carregando, request} = useFetch();

  function handleInputImage() {
    refInputFoto.current.click();
  }

  function handleChangeImage({target}) {
    setAlterarFoto({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  function handleDeletePhoto() {
    setAlterarFoto({
      preview: null,
      raw: null,
    });
    setAtualFotoPerfil(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(nome.validate() && sobrenome.validate() && emailData.validate()) {

      const data = {
        email: emailData.data,
        firstName: nome.data,
        lastName:sobrenome.data,
      }

      if(atualFotoPerfil && alterarFoto.raw) {
        data.img =  alterarFoto.raw;
      }
  
      if(password.data.length > 0) {
        data.password = password.data;
      }
      
      const {url, options } = USER_PUT(data, token);
      const {response} = await request(url, options);
      if(response.ok) {
        dispatch(fetchUser(token));
        setAtualizado(true);
        setTimeout(()=> {
          setEditarPerfil(false);
        }, 2000);
      }
    }
  }

  React.useEffect(()=> {
    nome.setData(first_name);
    sobrenome.setData(last_name);
    emailData.setData(email);
  }, []);

  return (
    <div className={style.Profile}>
      <div className={style.contentProfile}>
        <h2>Editar perfil</h2>
        <div className={style.imagemPerfil}>
          <div className={style.imagem}>
            <img 
              src={
                alterarFoto.preview ? 
                  alterarFoto.preview :
                  atualFotoPerfil ? 
                  atualFotoPerfil :
                  "../../../../public/Images/pngs/User.svg"

              } 
              alt="Foto do perfil" 
            />

            <input 
              type="file" 
              id={style.inputFoto} 
              ref={refInputFoto}
              onChange={handleChangeImage}
            />
          </div>
          <div className={style.botoes}>
            <button onClick={handleInputImage}>
              <img src="../../../../public/Images/icons/De uso Geral/AlterarImagemPerfil.svg" alt="Alterar imagem do perfil" />
              Alterar imagem
            </button>
            <button onClick={handleDeletePhoto}>
              <img src="../../../../public/Images/icons/De uso Geral/Deletar.svg" alt="Alterar imagem do perfil" />
              Remover
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <Input label="Nome" tipo="text" {...nome}/>
          <Input label="Sobrenome" tipo="text" {...sobrenome}/>
          <Input label="Email" tipo="email" {...emailData}/>
          <Input label="Nova Senha" tipo="password" placeholder="Digite sua nova senha caso deseje alterá-la"{...password}/>
          {carregando ? 
            <Button nome="Atualizando perfil..." estilo={{opacity: ".5"}} disabled /> :
            atualizado ?  
            <Button nome="Atualizado!" /> 
            :
            <Button nome="Atualizar perfil" />
          }
          {erro && <Error mensagem={erro}/>}
        </form>
      </div>
    </div>
  )
}

export default Profile