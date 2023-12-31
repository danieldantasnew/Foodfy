import React from 'react';
import style from './Radio.module.css'; 

const Radio = ({descricao, name, ...props}) => {
  const[radio, setRadio] = React.useState('Mais recentes');

  function handleRadio({target}) {
    setRadio(target.value);
  }

  return (
    <>
      <input type="radio" id={descricao} value={descricao} className={style.Input} name={name} checked={radio === descricao} onChange={handleRadio} {...props}/>
      <label htmlFor={descricao} className={style.Radio}>
        {descricao}
      </label>
    </>
  )
}

export default Radio