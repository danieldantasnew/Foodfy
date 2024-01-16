import React from 'react';
import style from './Myrecipes.module.css';
import Cards from '../../Receitas/Cards/Cards';
import { useDispatch, useSelector } from 'react-redux';
import {carregarReceitas} from '../../../store/reducers/receitas'
import Title from '../Helper/Titles/Title';

const MyRecipes = () => {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.receitas);
  const {id} = useSelector((state)=> state.login.user.data);

  React.useEffect(()=> {
    dispatch(carregarReceitas({total: 24, user: id}));
  }, [dispatch, id]);

  return (
    <div className={`${style.myRecipesContent} spaceContent animaLeft`}>
      <Title name="Minhas Receitas" />
      <Cards state={state} />
      </div>
  )
}

export default MyRecipes