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
import CarregarMaisReceitas from './CarregarMaisReceitas/CarregarMaisReceitas';
import { filtroCategoria } from '../../store/seletores/filtrosReceitas';


const Receitas = ({total, user}) => {
  const dispatch = useDispatch();
  const mobile = useMedia("(max-width: 34.375rem)");
  const loading = useSelector((state)=> state.receitas.loading);
  const state = useSelector(filtroCategoria);
  const {stopRecipes} = useSelector((state)=> state.receitas);
  const [busca, setBusca] = React.useState(null);
 
  React.useEffect(()=> {
    const urlParams = new URLSearchParams(window.location.search);
    if(urlParams) {
      setBusca(urlParams.get('busca'));
    }
  }, []);


  React.useEffect(()=> {
    if(busca || busca === '') {
      dispatch(carregarReceitas({total: 0, user}))
    }
    else {
      dispatch(carregarReceitas({total, user}))
    }
    
  }, [dispatch, total, user, busca]);

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
          <Busca busca={busca} setBusca={setBusca}/>
          {busca && <h2>Exibindo resultados para {`"${busca}"`}</h2>}
          <Cards state={state}/>
          {!stopRecipes && <CarregarMaisReceitas total={total} user={user}/>}
          {stopRecipes && <p style={{textAlign: "center", color: "var(--principal)"}}>Não há mais receitas</p>}
        </div>
      </div>
    </section>
  )
}

export default Receitas;