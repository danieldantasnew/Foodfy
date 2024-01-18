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
  const [scrollActive, setScrollActive] = React.useState(null);

  React.useEffect(()=> {
    dispatch(carregarReceitas({total, user}))
  }, [dispatch, total, user]);

  React.useEffect(()=> {
    function activeCards() {
      const heightScroll = window.scrollY;
      const height = (document.body.offsetHeight - window.innerHeight);
      if(heightScroll > height) {
        setScrollActive(true);
      }
    }

    window.addEventListener('scroll', activeCards);

    return ()=> {
      window.removeEventListener('scroll', activeCards);
    }
  }, []);

  if(loading) return <Carregando/>

  return (
    <section className={`${style.Home} animaLeft`}>
      <Head titulo="Início" descricao="Página inicial do Foodfy"/>
      <Apresentacao/>
      <Slides/>
      {scrollActive && 
      <section className={`${style.maisAcessadas} spaceContent animaTop`}>
        <h2>Mais acessadas</h2>
        <Cards state={stateAcessadas}/>
      </section>}
    </section>
  )
}

export default Home;