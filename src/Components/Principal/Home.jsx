import React from 'react';
import style from './Home.module.css';
import Apresentacao from './Apresentacao/Apresentacao';
import Head from '../Helper/Head/Head';
import Cards from '../Receitas/Cards/Cards';
import Slides from './Slides/Slides';
import { useDispatch, useSelector } from 'react-redux';
import { carregarReceitas } from '../../store/reducers/receitas';
import Modal from '../Helper/Modal/Modal';
import Carregando from '../Helper/Carregando/Carregando';

const Home = ({total, user}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=> state.receitas.loading);
  const stateAcessadas = useSelector((state)=> state.receitas);

  React.useEffect(()=> {
    dispatch(carregarReceitas({total, user}))
  }, [dispatch, total, user]);

  if(loading) return <Carregando/>

  return (
    <section className={`${style.Home} animaLeft`}>
      <Head titulo="Início" descricao="Página inicial do Foodfy"/>
      <Apresentacao/>
      <Slides/>
      <section className={`${style.maisAcessadas} spaceContent`}>
        <h2>Mais acessadas</h2>
        <Cards state={stateAcessadas}/>
      </section>
    </section>
  )
}

export default Home;