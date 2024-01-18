import React from 'react';
import style from './Myrecipes.module.css';
import Cards from '../../Receitas/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import {carregarReceitas} from '../../../store/reducers/receitas';
import Carregando from '../../Helper/Carregando/Carregando';
import Title from '../Helper/Titles/Title';
import Head from '../../Helper/Head/Head';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.receitas);
  const {id} = useSelector((state)=> state.login.user.data);
  const {loading} = useSelector((state)=> state.receitas);

  React.useEffect(()=> {
    dispatch(carregarReceitas({total: 24, user: id}));
  }, [dispatch, id]);

  if(loading) return <Carregando/>

  return (
    <div className={`${style.myRecipesContent} spaceContent animaLeft`}>
      <Head titulo="Minhas Receitas" descricao="Aqui estão suas receitas" />
      <Title name="Minhas Receitas" />
      <Cards state={state} />
    </div>
  )
}

export default MyRecipes