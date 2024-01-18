import style from './Cards.module.css';
import Skeleton from './SkeletonCard/Skeleton';
import { Link } from 'react-router-dom';

const Cards = ({state}) => {
  return (
    <section className={style.Cards}>
      {state?.map((card)=> 
      <Link key={card.id} className={style.card} to={`/receita/${card.id}`}>
        <Skeleton title={card.title} src={card.src} alt={card.title} firstName={card.firstName} lastName={card.lastName} mediaAvaliacao={card.mediaAvaliacao} total_comments={card.total_comments}/>
      </Link>)}
    </section>
  )
}

export default Cards;