import React, { useRef } from 'react';
import style from './BuscaHeader.module.css';
import {ReactComponent as SearchIcon} from '../../../../public/Images/icons/De uso Geral/busca.svg';
import {ReactComponent as Close} from "../../../../public/Images/icons/De uso Geral/btn-menu-close.svg"
import {carregarTodasReceitas, setSearch} from '../../../store/reducers/receitas';
import { searchSelector } from '../../../store/seletores/search';
import CardsSearch from './CardsSearch/CardsSearch';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useMedia from '../../../Hooks/useMedia';

const BuscaHeader = ({setMenu}) => {
  const [ativo, setAtivo] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const mobile = useMedia("(max-width: 34.375rem)");
  const busca = useSelector(searchSelector);
  const valorBuscaAtual = useSelector((state)=> state.receitas.search);
  const refSearch = useRef();
  const navigate = useNavigate();

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

  function handleEnter(event) {
    if(event.key === 'Enter') {
      navigate(`receitas?busca=${valorBuscaAtual}`);
      if(window.location.pathname === '/receitas') {
        window.location.reload();
      }
    }
  }

  React.useEffect(()=> {
    if(modal) {
      dispatch(carregarTodasReceitas({total: 0, user: 0}));
    }
  }, [dispatch, modal]);


  React.useEffect(()=> {
    setAtivo(false);
    setModal(false);
    dispatch(setSearch(""));
  }, [location, dispatch]);

  React.useEffect(()=> {
    let closeSearch = (event)=> {
      if(!refSearch.current.contains(event.target) && !mobile) {
        setModal(false);
        setAtivo(false);
      }
    }
    document.addEventListener('click', closeSearch);

    return ()=> {
      document.removeEventListener('click', closeSearch);
    }
  });

  return (
    <div ref={refSearch}>
      {ativo && !mobile ? 
        <div className={style.buscaAtiva} >
          <SearchIcon/>
          <input 
            type="text" 
            onChange={handleChange}
            onKeyDown={handleEnter}
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
                        onKeyDown={handleEnter}
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
    </div>
  )
}

export default BuscaHeader;