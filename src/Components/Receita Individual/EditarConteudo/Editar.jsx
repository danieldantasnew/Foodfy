import React from 'react';
import style from './Editar.module.css';
import styleInput from '../../Helper/Input/Input.module.css';
import Button from '../../Helper/Button/Button';
import Textarea from '../../Helper/TextArea/Textarea';
import styleLabel from '../../Helper/Input/Input.module.css';
import Select from '../../Helper/Select/Select';
import { useSelector } from 'react-redux';
import useFetch from '../../../Hooks/useFetch';
import { RECIPE_PUT } from '../../../Api';
import Error from '../../Helper/Error/Error';

const Editar = ({data}) => {
  const listaCategorias = useSelector((state)=> state.receitas.categorias);
  const listaDificuldades = useSelector((state)=> state.receitas.dificuldades);
  
  const [descricao, setDescricao] = React.useState(data.recipe.descricao);
  const [dificuldade, setDificuldade] = React.useState(data.recipe.dificuldade);
  const [categoria, setCategoria] = React.useState(data.recipe.categoria);
  const [ingredientes, setIngredientes] = React.useState(data.recipe.ingredientes);
  const [modoPreparo, setModoPreparo] = React.useState(data.recipe.modoPreparo);
  const[tempoPreparo, setTempoPreparo] = React.useState(data.recipe.tempoPreparo);
  const {request} = useFetch();
  const[erro, setErro] = React.useState(null);

  const token = useSelector((state)=> state.login.token.data?.token);
  const id = data.recipe.id;

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = RECIPE_PUT({
      descricao,
      categoria,
      dificuldade,
      ingredientes,
      modoPreparo,
      tempoPreparo
    }, token, id)
    const {response} = await request(url, options);
    if(response.ok) window.location.reload();
    else setErro('Não foi possível atualizar receita, verifique se você preencheu todas as informações corretamente.');
  }

  function handleInput({target}) {
    setTempoPreparo(target.value);
  }

  React.useEffect(()=> {
    if(erro) {
      setTimeout(()=> {
        setErro(null);
      }, 3000)
    }
  }, [erro]);

  return (
    <div className={style.conteudoEditar}>
      <h2>Edite sua Receita</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Descrição" className={styleLabel.Label}>
          Descrição
          <Textarea 
            value={descricao}
            setValue={setDescricao}
          />
        </label>
        <div className={style.organizaSelects}>
          <Select 
            array={listaDificuldades} 
            name="Dificuldade" 
            value={dificuldade}
            setValue={setDificuldade}
          />
          <Select 
            array={listaCategorias} 
            name="Categoria" 
            value={categoria}
            setValue={setCategoria}
          />
        </div>
          <Textarea 
            placeholder={"Insira um ingrediente por linha"}
            name={"Ingredientes"}
            value={ingredientes}
            setValue={setIngredientes}
          />
          <Textarea 
            name={"Modo de Preparo"}
            value={modoPreparo}
            setValue={setModoPreparo}
          />
          <label htmlFor="tempoPreparo" className={styleInput.Label}>
            Tempo de Preparo (Minutos)
            <input type="number" id="tempoPreparo" onChange={handleInput} value={tempoPreparo} className={styleInput.Input}/>
          </label>
        <Button  nome="Atualizar receita" />
      </form>
      {erro && <Error mensagem={erro}/>}
    </div>
  )
}

export default Editar;