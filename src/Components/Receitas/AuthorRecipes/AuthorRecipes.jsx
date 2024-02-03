import React from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { carregarTodasReceitas } from '../../../store/reducers/receitas';
import Carregando from '../../Helper/Carregando/Carregando';
import { useDispatch, useSelector } from 'react-redux';
import style from './AuthorRecipes.module.css';
import Title from '../../Account/Helper/Titles/Title';

const AuthorRecipes = () => {
  const params = useParams();
  const {loading, data} = useSelector((state)=> state.receitas);
  const dispatch = useDispatch();
  
  React.useEffect(()=> {
    dispatch(carregarTodasReceitas({total: 100, user: params.user}))
  }, [dispatch, params.user]);

  if(loading) return <Carregando/>
  if(!data) return null;
  return (
    <section className={style.AuthorRecipes}>
      <div className={`${style.authorContent} spaceContent animaLeft`}>
        <Title name={`Receitas de ${params.user}`}/>
        <Cards state={data}/>
      </div> 
    </section>
  )
}

export default AuthorRecipes;