import React from 'react';
import style from './Cards.module.css';

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
          <h2>{card.title}</h2>
          <div className={style.subinfo}>
            <div></div>
            <p>por {card.firstName} {card.lastName}</p>
          </div>
        </div>
      </div>)}
    </section>
  )
}

export default Cards;