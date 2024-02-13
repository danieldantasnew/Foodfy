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
import { useNavigate } from 'react-router-dom';
import Head from '../../Helper/Head/Head';
import InputFiles from '../../Helper/InputFiles/InputFiles';
import MultipleSelect from '../../Helper/MultipleSelect/MultipleSelect';
import ListItems from '../../Helper/ListItems/ListItems';

const PostRecipe = () => {
  const categorias = useSelector((state)=> state.receitas.categorias);
  const dificuldades = useSelector((state)=> state.receitas.dificuldades);
  const navigate = useNavigate();
  const {token} = useSelector((state)=> state.login.token.data);
  const {carregando, dados, erro, setErro, request} = useFetch();
  const inputFile = React.useRef(null);
  const [enviado, setEnviado] = React.useState(null);

  const [imagem, setImagem] = React.useState({});
  const nomeReceita = useValidate();
  const [descricao, setDescricao] = React.useState('');
  const [categoria, setCategoria] = React.useState([categorias[0]]);
  const [dificuldade, setDificuldade] = React.useState(dificuldades[0]);
  const [ingredientes, setIngredientes] = React.useState(['']);
  const [modoPreparo, setModoPreparo] = React.useState(['']);
  const tempoPreparo = useValidate();

  React.useEffect(()=> {
    if(dados) {
      setTimeout(()=> {
        navigate('/conta');
      }, 600);
    }
  }, [dados, navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    if(nomeReceita.validate() && descricao && ingredientes.length > 0 && modoPreparo.length > 0 && tempoPreparo.validate() && categoria.length > 0) {
      const formData = new FormData();
      const envioCategorias = categoria.join('$$');
      const envioIngredientes = ingredientes.join('$$');
      const envioModoPreparo = modoPreparo.join('$$');

      formData.append('img', imagem.raw);
      formData.append('nome', nomeReceita.data);
      formData.append('descricao', descricao);
      formData.append('categoria', envioCategorias);
      formData.append('dificuldade', dificuldade);
      formData.append('ingredientes', envioIngredientes);
      formData.append('modoPreparo', envioModoPreparo);
      formData.append('tempoPreparo', tempoPreparo.data);
      
      const {url, options} = RECIPE_POST(formData, token);
      const {response} = await request(url, options);
      if(response.ok) setEnviado(true);
    }
  }

  return (
    <div className={`${style.postRecipe} spaceContent animaLeft`}>
      <Head titulo="Poste sua receita" descricao="Poste uma nova receita!" />
      <Title name="Poste sua receita" />
      <form onSubmit={handleSubmit}>
        <InputFiles imagem={imagem} setImagem={setImagem} inputFile={inputFile} />
        <Input tipo="text" label="Nome da Receita" {...nomeReceita}/>
        <TextArea 
        placeholder="Descreva sobre sua receita" 
        name="Descrição"
        value={descricao}
        setValue={setDescricao}
        />
        <div className={style.selects}>
          <Select 
            name="Dificuldade" 
            array={dificuldades} 
            value={dificuldade}
            setValue={setDificuldade}  
          />
          <Input 
            label="Tempo de Preparo (Minutos)" 
            tipo="number" 
            min={0} 
            {...tempoPreparo}
          />
          <MultipleSelect 
            name="Categorias" 
            array={categorias} 
            selects={categoria} 
            setSelects={setCategoria}
            erro={erro}
            setErro={setErro}
          />
        </div>
        <ListItems
          name="Ingredientes" 
          value={ingredientes}
          setValue={setIngredientes}
        />
        <ListItems
          name="Modo de Preparo"
          value={modoPreparo}
          setValue={setModoPreparo}
        />
        {enviado ? <Button nome="Postado!" /> :
          carregando ? 
            <Button nome="Postando..." estilo={{opacity: ".5"}}/>:
            <Button nome="Postar nova receita" />
        }
        {erro && <Error mensagem={erro}/>}
      </form>
    </div>
  )
}

export default PostRecipe;