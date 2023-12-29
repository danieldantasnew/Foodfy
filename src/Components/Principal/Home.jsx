import style from './Home.module.css';
import Apresentacao from './Apresentacao/Apresentacao';
import Head from '../Helper/Head/Head';

const Home = () => {
  return (
    <section className={`${style.Home} animaLeft`}>
      <Head titulo="Início" descricao="Página inicial do Foodfy"/>
      <Apresentacao/>
    </section>
  )
}

export default Home