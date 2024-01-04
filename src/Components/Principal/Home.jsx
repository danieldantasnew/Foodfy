import style from './Home.module.css';
import Apresentacao from './Apresentacao/Apresentacao';
import Head from '../Helper/Head/Head';
import Cards from '../Receitas/Cards/Cards';
import Slides from './Slides/Slides';

const Home = () => {
  return (
    <section className={`${style.Home} animaLeft`}>
      <Head titulo="Início" descricao="Página inicial do Foodfy"/>
      <Apresentacao/>
      <Slides/>
      <section className={`${style.maisAcessadas} spaceContent`}>
        <h2>Mais acessadas</h2>
        <Cards total={6}/>
      </section>
    </section>
  )
}

export default Home;