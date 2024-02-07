import { useSelector } from 'react-redux';
import style from './CardsSearch.module.css';
import { Link, useNavigate } from 'react-router-dom';

const CardsSearch = ({state}) => {
  const valorBuscaAtual = useSelector((state)=> state.receitas.search);
  const navigate = useNavigate();
  
  function handleEnter() {
    navigate(`receitas?busca=${valorBuscaAtual}`);
    if(window.location.pathname === '/receitas') {
      window.location.reload();
    }
  }

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
          <Link to={`receitas?busca=${valorBuscaAtual}`} onClick={handleEnter}>Ver todas as receitas relacionadas</Link>
        </div>
        :
        <p className={style.descricao}>Receita não encontrada</p>
      }
    </>
  )
}

export default CardsSearch;