import style from './Receitas.module.css';
import Head from '../Helper/Head/Head';
import Busca from '../Helper/Busca/Busca';
import Cards from './Cards/Cards';
import Categorias from './Categorias/Categorias';
import Filtros from './Filtros/Filtros';
import useMedia from '../../Hooks/useMedia';

const Receitas = () => {
  const mobile = useMedia("(max-width: 34.375rem)");

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
          <Cards/>
        </div>
      </div>
    </section>
  )
}

export default Receitas;