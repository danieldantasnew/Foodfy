import { TypeAnimation } from 'react-type-animation';
import style from './Apresentacao.module.css';

const Apresentacao = () => {
  return (
    <div className={`${style.apresentacao} spaceContent`}>
      <div className={style.titulos}>
        <h1>As melhores receitas</h1>
        <TypeAnimation sequence={[
          "Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.", 
          1000,
        ]}
         speed={115}
         cursor={false}
        />
      </div>
      <div className={style.imagemChef}>
        <img src="../../../public/Images/pngs/chef.png" alt="Chef ícone" />
      </div>
  </div>
  )
}

export default Apresentacao;