import React from 'react';
import style from './Receitas.module.css';
import Head from '../Helper/Head/Head';
import Busca from '../Helper/Busca/Busca';
import Cards from './Cards/Cards';
import Categorias from './Categorias/Categorias';
import Filtros from './Filtros/Filtros';

const Receitas = () => {
  
  


  return (
    <section className={style.Receitas}>
      <Head titulo="Receitas" descricao="Encontre a sua próxima receita!" />
      <div className={`${style.ReceitasContent} spaceContent`}>
        <div className={style.grid1}>
          <h1>Receitas</h1>
          <div className={style.opcoes}>
            <Filtros/>
            <Categorias/>
          </div>
        </div>
        <div>
          <Busca/>
          <Cards/>
        </div>
      </div>
    </section>
  )
}

export default Receitas