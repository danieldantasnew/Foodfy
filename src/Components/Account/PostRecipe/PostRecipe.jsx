import React from 'react';
import style from './PostRecipe.module.css';
import Title from '../Helper/Titles/Title';
import Select from '../../Helper/Select/Select';
import Input from '../../Helper/Input/Input';
import TextArea from '../../Helper/TextArea/Textarea';
import {useValidate} from '../../../Hooks/useValidate';
import useFetch from '../../../Hooks/useFetch';
import Button from '../../Helper/Button/Button';
import { RECIPE_POST } from '../../../Api';
import { useSelector } from 'react-redux';
import Error from '../../Helper/Error/Error';
import { Navigate, useNavigate } from 'react-router-dom';

const PostRecipe = () => {
  const categorias = ["Arroz", "Aves", "Alimentação Saudável", "Bebidas", "Bolos e Tortas", "Carnes", "Doces e Sobremesas", "Lanches", "Massas", "Peixes e Frutos do Mar", "Refeições", "Saladas e Molhos"];
  const dificuldades = ["fácil", "médio", "difícil"];
  const navigate = useNavigate();
  const token = useSelector((state)=> state.login.token.data);
  const {carregando, dados, erro, request} = useFetch();
  const inputFile = React.useRef(null);
  const [imagem, setImagem] = React.useState({});
  const nomeReceita = useValidate();
  const descricao = useValidate();
  const [categoria, setCategoria] = React.useState('Arroz');
  const [dificuldade, setDificuldade] = React.useState('fácil');
  const ingredientes = useValidate();
  const modoPreparo = useValidate();
  const tempoPreparo = useValidate();

  React.useEffect(()=> {
    if(dados) {
      navigate('/conta');
    }
  }, [dados, navigate]);

  function selecionarFoto() {
    inputFile.current.click();
  }

  function handleChangeImage({target}) {
    if(target.files.length > 0) {
      const arquivo = target.files[0];
      setImagem({
        preview: URL.createObjectURL(arquivo),
        raw: target.files[0],
      })
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if(nomeReceita.validate() && descricao.validate() && ingredientes.validate() && modoPreparo.validate() && tempoPreparo.validate()) {
      const formData = new FormData();
      formData.append('img', imagem.raw);
      formData.append('nome', nomeReceita.data);
      formData.append('descricao', descricao.data);
      formData.append('categoria', categoria);
      formData.append('dificuldade', dificuldade);
      formData.append('ingredientes', ingredientes.data);
      formData.append('modoPreparo', modoPreparo.data);
      formData.append('tempoPreparo', tempoPreparo.data);

      
      const {url, options} = RECIPE_POST(formData, token);
      const {response} = await request(url, options);
      if(response.ok) console.log('Receita Enviada');
    }
  }

  return (
    <div className={`${style.postRecipe} spaceContent animaLeft`}>
      <Title name="Poste sua receita" />
      <form onSubmit={handleSubmit}>
        <div 
        className={Object.keys(imagem).length > 0 ? style.imagemReceitaPreenchida : style.imagemReceita}  
        onClick={selecionarFoto}>
          {Object.keys(imagem).length > 0 && 
          <img 
          src={imagem.preview} 
          alt='Prévia da imagem da receita' 
          />}
          <input 
          type="file" 
          ref={inputFile} 
          onChange={handleChangeImage} 
          style={{display: "none"}}
          />
        </div>
        <Input tipo="text" label="Nome da Receita" {...nomeReceita}/>
        <TextArea 
        placeholder="Descreva sobre sua receita" 
        name="Descrição"
        {...descricao}
        />
        <div className={style.cdi}>
          <div className={style.selects}>
            <Select 
              name="Categoria" 
              array={categorias} 
              value={categoria} 
              setValue={setCategoria} 
            />
            <Select 
              name="Dificuldade" 
              array={dificuldades} 
              value={dificuldade}
              setValue={setDificuldade}  
            />
          </div>
          <TextArea 
            name="Ingredientes" 
            placeholder="Digite um ingrediente por linha" 
            {...ingredientes} 
          />
        </div>
        <TextArea 
          name="Modo de Preparo" 
          placeholder="Separe as etapas por linha" 
          {...modoPreparo}
        />
        <Input label="Tempo de Preparo (Minutos)" tipo="number" {...tempoPreparo}/>
        <Button nome="Enviar nova receita" /> 
        {erro && <Error mensagem={erro}/>}
      </form>
    </div>
  )
}

export default PostRecipe;