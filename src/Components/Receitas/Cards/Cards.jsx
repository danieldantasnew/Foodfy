import React from 'react';
import style from './Cards.module.css';
import Skeleton from './SkeletonCard/Skeleton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { carregarReceitas } from '../../../store/reducers/receitas';

const Cards = ({user}) => {
  const dispatch = useDispatch();
  const state = useSelector((state)=> state.receitas);

  React.useEffect(()=> {
    dispatch(carregarReceitas({total: 24, user}))
  }, [dispatch, user]);

  if(state.loading) return <div>Carregando...</div>

  return (
    <section className={style.Cards}>
      {state.data?.map((card)=> 
      <Link key={card.id} className={style.card} to={`/receita/${card.id}`}>
        <Skeleton title={card.title} src={card.src} alt={card.title} firstName={card.firstName} lastName={card.lastName} mediaAvaliacao={card.mediaAvaliacao} total_comments={card.total_comments}/>
      </Link>)}
    </section>
  )
}

export default Cards;