import React from 'react';
import style from './Radio.module.css'; 
import { useDispatch } from 'react-redux';
import { setFiltros } from '../../../store/reducers/receitas';

const Radio = ({...props}) => {
  const[radio, setRadio] = React.useState('Mais recentes');
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(setFiltros({name: 'filtro', value: radio}));
  }, [radio, dispatch]);

  function handleRadio({target}) {
    setRadio(target.value);
  }

  return (

    <ul>
      <li>
        <input type="radio" id="Mais recentes" value="Mais recentes" className={style.Input} name="filtro" checked={radio === "Mais recentes"} onChange={handleRadio} {...props}/>
        <label htmlFor="Mais recentes" className={style.Radio}>
          Mais recentes
        </label>
      </li>
      <li>
        <input type="radio" id="Mais antigas" value="Mais antigas" className={style.Input} name="filtro" checked={radio === "Mais antigas"} onChange={handleRadio} {...props}/>
        <label htmlFor="Mais antigas" className={style.Radio}>
          Mais antigas
        </label>
      </li>
      <li>
        <input type="radio" id="Mais acessadas" value="Mais acessadas" className={style.Input} name="filtro" checked={radio === "Mais acessadas"} onChange={handleRadio} {...props}/>
        <label htmlFor="Mais acessadas" className={style.Radio}>
          Mais acessadas
        </label>
      </li>
      <li>
        <input type="radio" id="Melhor avaliadas" value="Melhor avaliadas" className={style.Input} name="filtro" checked={radio === "Melhor avaliadas"} onChange={handleRadio} {...props}/>
        <label htmlFor="Melhor avaliadas" className={style.Radio}>
          Melhor avaliadas
        </label>
      </li>
      <li>
        <input type="radio" id="De A-Z" value="De A-Z" className={style.Input} name="filtro" checked={radio === "De A-Z"} onChange={handleRadio} {...props}/>
        <label htmlFor="De A-Z" className={style.Radio}>
          De A-Z
        </label>
      </li>
    </ul>
  )
}

export default Radio;