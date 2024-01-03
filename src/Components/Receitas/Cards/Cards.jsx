import React from 'react';
import style from './Cards.module.css';
import Skeleton from './SkeletonCard/Skeleton';

const Cards = () => {
  const[data, setData] = React.useState(null);

  React.useEffect(()=> {
    fetch('http://foodfyapi.local/json/api/recipe').then((response)=> response.json()).then((json)=> setData(json));

  }, []);

  // React.useEffect(()=> {
  //   console.log(data);
  // }, [data]);

  return (
    <section className={style.Cards}>
      {data?.map((card)=> 
      <div key={card.id} className={style.card}>
        <Skeleton title={card.title} src={card.src} alt={card.title} firstName={card.firstName} lastName={card.lastName} mediaAvaliacao={card.mediaAvaliacao} total_comments={card.total_comments}/>
      </div>)}
    </section>
  )
}

export default Cards;