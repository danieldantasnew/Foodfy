import style from './Home.module.css';
import Apresentacao from './Apresentacao/Apresentacao';
import Head from '../Helper/Head/Head';
import Cards from '../Receitas/Cards/Cards';

const Home = () => {
  return (
    <section className={`${style.Home} animaLeft`}>
      <Head titulo="Início" descricao="Página inicial do Foodfy"/>
      <Apresentacao/>
      <div className={`${style.maisAcessadas} spaceContent`}>
        <h2>Mais acessadas</h2>
        <Cards/>
      </div>
    </section>
  )
}

export default Home;