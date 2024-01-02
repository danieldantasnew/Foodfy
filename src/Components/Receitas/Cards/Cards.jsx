import React from 'react';
import style from './Cards.module.css';
import Avaliacao from './Avaliacao/Avaliacao';

const Cards = () => {
  const[data, setData] = React.useState(null);

  React.useEffect(()=> {
    fetch('http://foodfyapi.local/json/api/recipe').then((response)=> response.json()).then((json)=> setData(json));

  }, []);

  React.useEffect(()=> {
    console.log(data)
  }, [data]);

  return (
    <section className={style.Cards}>
      {data?.map((card)=> 
      <div key={card.id} className={style.card}>
        <img src={card.src} alt={card.title} />
        <div className={style.info}>
          <h3>{card.title}</h3>
          <div className={style.subinfo}>
            <div className={style.avaliacao}>
              <img src="../../../../public/Images/icons/De uso Geral/estrelaCard.svg" alt="Estrela da avaliação" />
              <div className={style.nota}>
                <Avaliacao avaliacoes={card.comentarios}/> 
                <p style={{display: "inline-block"}}>({card.total_comments})</p>  
              </div>
            </div>
            <p>por {card.firstName} {card.lastName}</p>
          </div>
        </div>
      </div>)}
    </section>
  )
}

export default Cards;