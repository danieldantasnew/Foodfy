import React from 'react';
import style from './SlidesIndividual.module.css';
import { Link } from 'react-router-dom';

const SlideIndividual = ({title, src, dificuldade, tempoPreparo, media, id}) => {

  const [hover, setHover] = React.useState(null);

  return (
    <div className={style.slide} onMouseEnter={()=> setHover(!hover)} onMouseLeave={()=> setHover(!hover)}>
    <img src={src} alt={title}/>
    {hover && 
    <Link to={`/receita/${id}`}>
      <div className={style.modalCard}></div>
      <div className={`${style.avaliacao} animaBottom`}>
        <img src="../../../../public/Images/icons/Receita Individual/Estrela cheia.svg" alt="Estrela de avaliação" />
        {media}
      </div>
      <div className={style.slideHover}>
        <h2 className='animaTop'>{title}</h2>
        <div className={`${style.detalhesSlide} animaBottom`}>
          <div className={`${style.alignIcons}`}>
            <img src="../../../../public/Images/icons/Receita Individual/Dificuldade 2.svg " alt="Nível de dificuldade" />
            {"Nível " + dificuldade}
          </div>
          <div className={style.alignIcons}>
            <img src="../../../../public/Images/icons/Receita Individual/Timer2.svg " alt="Nível de dificuldade" />
            {tempoPreparo} {tempoPreparo > 1 ? "mins" : "min"}
          </div>
        </div>
      </div>
    </Link> 
    }
  </div>
  )
}

export default SlideIndividual