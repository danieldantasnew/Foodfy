import React from 'react';
import style from './BuscaHeader.module.css';
import {ReactComponent as SearchIcon} from '../../../../public/Images/icons/De uso Geral/busca.svg';
import {carregarTodasReceitas, setSearch} from '../../../store/reducers/receitas';
import { searchSelector } from '../../../store/seletores/search';
import CardsSearch from './CardsSearch/CardsSearch';
import { useDispatch, useSelector } from 'react-redux';

const BuscaHeader = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const dispatch = useDispatch();
  const busca = useSelector(searchSelector);

  function handleChange({target}) {
    target.value.length > 0 ?
    setModal(true) :
    setModal(false);

    dispatch(setSearch(target.value));
  }

  React.useEffect(()=> {
    if(modal) {
      dispatch(carregarTodasReceitas({total: 200, user: 0}));
    }
  }, [dispatch, modal]);

  return (
    <>
      {ativo ? 
       <div className={style.buscaAtiva}>
        <SearchIcon/>
        <input 
          type="text" 
          onChange={handleChange}
        />
        {modal &&
          <>
            <div className={style.apontador}></div>
            <div className={style.modalBusca}>
              <CardsSearch state={busca}/>
            </div>
          </>
        }
       </div>
       :
        <div className={style.busca} onClick={()=> setAtivo(!ativo)}>
          <SearchIcon/>
        </div>
      }
    </>
  )
}

export default BuscaHeader;