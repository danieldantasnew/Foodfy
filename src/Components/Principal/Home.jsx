import style from './Home.module.css';
import Apresentacao from './Apresentacao/Apresentacao';

const Home = () => {
  return (
    <section className={`${style.Home} animaLeft`}>
      <Apresentacao/>
    </section>
  )
}

export default Home