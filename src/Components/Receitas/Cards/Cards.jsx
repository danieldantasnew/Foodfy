import React from 'react';
import style from './Cards.module.css';
import Skeleton from './SkeletonCard/Skeleton';

const Cards = ({total}) => {
  const[data, setData] = React.useState(null);

  React.useEffect(()=> {
    fetch(`http://foodfyapi.local/json/api/recipe/?_page=1&_total=${total || 24}&_user=0`).then((response)=> response.json()).then((json)=> setData(json));

  }, [total]);

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