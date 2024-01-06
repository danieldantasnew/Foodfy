import React from 'react';
import style from './Skeleton.module.css';
import styleCard from '../Cards.module.css';
import Avaliacao from '../Avaliacao/Avaliacao';

const Skeleton = ({src, alt, title, mediaAvaliacao, total_comments, firstName, lastName, ...props}) => {
  const [skeleton, setSkeleton] = React.useState(true);
  
  function handleCard({target}) {
    target.style.opacity = 1;
    target.style.display = "block";
    setSkeleton(false);
  }

  return (
    <>
      {skeleton ?
      <div className={style.skeletonCard} {...props}>
        <div className={style.imagemFake}>
          <img src={src} alt={alt} onLoad={handleCard} className={style.imagemSkeleton} />
        </div>
        <div className={style.info}>
          <div className={style.divh3}></div>
          <div className={style.subinfo}>
            <div className={style.avaliacao}>
            </div>
            <p className={style.autor}></p>
          </div>
        </div>
      </div> :
      <>
        <img src={src} alt={alt} onLoad={handleCard} className={styleCard.imagemCard}/>
        <div className={styleCard.info}>
          <h3>{title}</h3>
          <div className={styleCard.subinfo}>
            <div className={styleCard.avaliacao}>
              <img src="../../../../public/Images/icons/De uso Geral/estrelaCard2.svg" alt="Estrela da avaliação" />
              <div className={styleCard.nota}>
                <Avaliacao media={mediaAvaliacao}/> 
                <p style={{display: "inline-block"}}>({total_comments})</p>  
              </div>
            </div>
            <p>por {firstName} {lastName}</p>
          </div>
        </div>
      </>
      }
    </>
  )
}

export default Skeleton;