import React from 'react';
import style from './PostRecipe.module.css';
import Title from '../Helper/Titles/Title';
import Select from '../../Helper/Select/Select';
import Input from '../../Helper/Input/Input';
import TextArea from '../../Helper/TextArea/Textarea';
import {useValidate} from '../../../Hooks/useValidate';
import Button from '../../Helper/Button/Button';

const PostRecipe = () => {
  const nomeReceita = useValidate();
  const categorias = ["Arroz", "Aves", "Alimentação Saudável", "Bebidas", "Bolos e Tortas", "Carnes", "Doces e Sobremesas", "Lanches", "Massas", "Peixes e Frutos do Mar", "Refeições", "Saladas e Molhos"];
  const dificuldades = ["fácil", "médio", "difícil"];

  return (
    <div className={`${style.postRecipe} spaceContent animaLeft`}>
      <Title name="Poste sua receita" />
      <form action="">
        <div></div>
        <Input tipo="text" label="Nome da Receita" {...nomeReceita}/>
        <TextArea 
        placeholder="Descreva sobre sua receita" 
        name="Descrição"
        />
        <div className={style.cdi}>
          <div className={style.selects}>
            <Select name="Categoria" array={categorias} />
            <Select name="Dificuldade" array={dificuldades} />
          </div>
          <TextArea name="Ingredientes" placeholder="Digite um ingrediente por linha" />
        </div>
        <TextArea name="Modo de Preparo" placeholder="Separe as etapas por linha" />
        <Input label="Tempo de Preparo (Minutos)" tipo="number" />
        <Button nome="Enviar nova receita" /> 
      </form>
    </div>
  )
}

export default PostRecipe;