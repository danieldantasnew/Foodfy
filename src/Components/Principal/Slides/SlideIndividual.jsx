import React from 'react';
import style from '../Slides/Slides.module.css';

const SlideIndividual = ({title, src, dificuldade, tempoPreparo}) => {

  const [hover, setHover] = React.useState(null);

  return (
    <div className={style.slide}  onMouseEnter={()=> setHover(!hover)} onMouseLeave={()=> setHover(!hover)}>
    <img src={src} alt={title}/>
    {hover && 
    <>
      <div className={style.modalCard}></div>
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
    </>
    }
  </div>
  )
}

export default SlideIndividual