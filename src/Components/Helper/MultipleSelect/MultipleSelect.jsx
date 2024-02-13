import React from 'react';
import {ReactComponent as Dropdown} from '../../../../public/Images/icons/Receitas/Dropdown.svg'
import style from './MultipleSelect.module.css';
import styleLabel from '../Input/Input.module.css';

const MultipleSelect = ({name, array, selects, setSelects, setErro}) => {

  const [open, setOpen] = React.useState(null);
  const refCategoria = React.useRef();
  
  function handleChange(option) {
    if(!selects.includes(option)) {
      setSelects([...selects, option]);
    }
    else{
      setSelects((selects)=> {
        return selects.filter((valor)=> option !== valor);
      })
    }
  }

  React.useEffect(()=> {
    function clickOutside(event) {
      if(!refCategoria.current.contains(event.target)) {
        setOpen(null);
        document.removeEventListener('click', clickOutside);
      }
    }

    document.addEventListener('click', clickOutside);

    return ()=> {
      document.removeEventListener('click', clickOutside);
    }
  });

  React.useEffect(()=> {
    if(selects.length > 0) setErro(null);
    else setErro('Selecione ao menos uma categoria');
  }, [selects, setErro]);
  
  return (
  <label htmlFor={name} className={styleLabel.Label} ref={refCategoria}>
    {name}
    <div className={style.categorias}>
      <div 
      className={`${styleLabel.Input} ${style.select} ${open ? style.selectAtivo : ''}`} 
      onClick={()=> setOpen(!open)}>
        {selects.length <= 1 ? `${selects.length} Selecionado` : `${selects.length} Selecionados`}
        <Dropdown/>
      </div>
      {
        open && 
        <ul className={`${style.listaCategoria} animaBottom`}>
          {array.map((option) =>
            <li 
              key={option} 
              onClick={()=> handleChange(option)}
              className={selects.includes(option) ? style.checked : ''}
            >
              {option}
            </li>
          )}
        </ul>
      }
    </div>
  </label>
  )
}

export default MultipleSelect;