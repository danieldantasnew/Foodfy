import React from 'react';
import style from './BuscaHeader.module.css';
import {ReactComponent as SearchIcon} from '../../../../public/Images/icons/De uso Geral/busca.svg';
import {ReactComponent as Close} from "../../../../public/Images/icons/De uso Geral/btn-menu-close.svg"
import {carregarTodasReceitas, setSearch} from '../../../store/reducers/receitas';
import { searchSelector } from '../../../store/seletores/search';
import CardsSearch from './CardsSearch/CardsSearch';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useMedia from '../../../Hooks/useMedia';

const BuscaHeader = ({setMenu}) => {
  const [ativo, setAtivo] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const mobile = useMedia("(max-width: 34.375rem)");
  const busca = useSelector(searchSelector);

  function handleChange({target}) {
    target.value.length > 0 ?
    setModal(true) :
    setModal(false);

    dispatch(setSearch(target.value));
  }

  function handleClose() {
    setMenu(false);
    setModal(false);
    setAtivo(false);
  }

  React.useEffect(()=> {
    if(modal) {
      dispatch(carregarTodasReceitas({total: 200, user: 0}));
    }
  }, [dispatch, modal]);


  React.useEffect(()=> {
    setAtivo(false);
  }, [location])

  return (
    <>
      {ativo && !mobile ? 
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
        <>
        {!mobile ? 
            ativo ? 
              <div className={`${style.buscaAtiva}`} onClick={()=> setAtivo(!ativo)}>
                <SearchIcon/>
                <input 
                  type="text"
                  onClick={()=> setAtivo(true)}
                  placeholder='Buscar uma receita'
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
  
            :
              ativo ? 
                <div className={`${style.buscaAtivaMobile} ${style.buscaAtiva}`}>
                  <div>
                    <div>
                      <SearchIcon/>
                      <input 
                        type="text"
                        placeholder='Buscar uma receita'
                        onChange={handleChange}
                      />
                    </div>
                    <div className={style.close} onClick={handleClose}>
                      <Close/>
                    </div>
                  </div>
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
                <div className={`${style.buscaAtiva}`} onClick={()=> {
                  setAtivo(true)
                  }
                  }>
                  <SearchIcon/>
                  <input 
                    type="text"
                    placeholder='Buscar uma receita'
                  />
                </div>
          }
        </>
      }
    </>
  )
}

export default BuscaHeader;