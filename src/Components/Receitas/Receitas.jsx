import React from 'react';
import style from './Receitas.module.css';
import Head from '../Helper/Head/Head';
import Busca from '../Helper/Busca/Busca';
import Cards from './Cards/Cards';
import Categorias from './Categorias/Categorias';
import Filtros from './Filtros/Filtros';
import Carregando from '../Helper/Carregando/Carregando';
import useMedia from '../../Hooks/useMedia';
import { useDispatch, useSelector } from 'react-redux';
import { carregarReceitas } from '../../store/reducers/receitas';

const Receitas = ({total, user}) => {
  const dispatch = useDispatch();
  const mobile = useMedia("(max-width: 34.375rem)");
  const loading = useSelector((state)=> state.receitas.loading);
  const state = useSelector((state)=> state.receitas.data);

  React.useEffect(()=> {
    dispatch(carregarReceitas({total, user}))
  }, [dispatch, total, user]);

  if(loading) return <Carregando/>
  return (
    <section className={`${style.Receitas} animaLeft`}>
      <Head titulo="Receitas" descricao="Encontre a sua próxima receita!" />
      <div className={`${style.ReceitasContent} spaceContent`}>
        <div className={style.grid}>
          <h1>Receitas</h1>
          <div className={style.opcoes}>
            <Filtros mobile={mobile}/>
            <Categorias mobile={mobile}/>
          </div>
        </div>
        <div className={style.grid}>
          <Busca/>
          <Cards state={state}/>
        </div>
      </div>
    </section>
  )
}

export default Receitas;