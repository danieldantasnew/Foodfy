import React from 'react';
import style from './Filtros.module.css';
import Radio from '../../Helper/Radio/Radio';
import receitasStyle from '../Receitas.module.css';

const Filtros = ({mobile}) => {
  const [filtros, setFiltros] = React.useState(true);

  React.useEffect(()=> {
    if(mobile) setFiltros(false);
    else setFiltros(true);
  }, [mobile]);


  return (
    <div className={`${style.filtro} ${filtros ? style.marginBottom : ''}`}>
      <div className={`${receitasStyle.titulo} ${filtros ? '' : receitasStyle.rotateDropdown}`} onClick={()=> setFiltros(!filtros)}>
        <img src="../../../public/Images/icons/Receitas/Filtro.svg" alt="" />
        <h2>Filtrar por:</h2>
      </div>
      {filtros && <Radio/>}
  </div>  
  )
}

export default Filtros