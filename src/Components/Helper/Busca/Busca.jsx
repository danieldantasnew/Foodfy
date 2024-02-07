import React from 'react';
import estiloInput from '../Input/Input.module.css';
import style from './Busca.module.css';
import { useDispatch } from 'react-redux';
import { setFiltros } from '../../../store/reducers/receitas';

const Busca = ({busca, setBusca}) => {
  const dispatch = useDispatch();

  function handleChange({target}) {
    if(busca) {
      setBusca(null);
    }
    dispatch(setFiltros({name: 'input', value: target.value}));
  }

  React.useEffect(()=> {
    if(busca) {
      dispatch(setFiltros({name: 'input', value: busca}));
    }
    else {
      dispatch(setFiltros({name: 'input', value: ""}));
    }
  }, [busca, dispatch]);

  return (
    <div className={`${style.Busca}`}>
      <label htmlFor="busca">
        <img src="../../../../public/Images/icons/Receitas/Busca.svg" alt="Ícone buscar uma receita" />
      </label>
      <input 
        type='text' 
        placeholder='Buscar uma receita' 
        className={estiloInput.Input} 
        id="busca"
        onChange={handleChange} 
      />
    </div>
  )
}

export default Busca