import { useSelector } from 'react-redux';
import style from './CardsSearch.module.css';
import { Link } from 'react-router-dom';

const CardsSearch = ({state}) => {
  const valorBuscaAtual = useSelector((state)=> state.receitas.search);

  return (
    <>
      {state.length > 0 ? 
        <div className={style.cards}>
          {state.map((receita)=> 
             <Link to={`receita/${receita.id}`} key={receita.id}>
              <div className={style.card}>
                <div className={style.card1}>
                  <img src={receita.src} alt={receita.title} />
                  <h3>{receita.title}</h3>
                </div>
                <p>por {receita.firstName} {receita.lastName}</p>
              </div>
            </Link>
          )}
          <Link to={`receitas?busca="${valorBuscaAtual}"`}>Ver todas as receitas relacionadas</Link>
        </div>
        :
        <p className={style.descricao}>Receita não encontrada</p>
      }
    </>
  )
}

export default CardsSearch;