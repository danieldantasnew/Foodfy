import React from 'react';
import style from './ListItems.module.css';
import styleLabel from '../Input/Input.module.css';
import Error from '../Error/Error';
import {ReactComponent as Create} from '../../../../public/Images/icons/De uso Geral/Add.svg';
import {ReactComponent as Remove} from '../../../../public/Images/icons/De uso Geral/Remove.svg';

const ListItems = ({name, value, setValue}) => {

  const [erro, setErro] = React.useState(null);

  function removeItem(event, index) {
    event.preventDefault();
    const valueArray = [...value];
    valueArray.splice(index, 1);
    setValue(valueArray);
  }

  function createItem(event, index) {
    event.preventDefault();
    const valueItem = value[index];
    if(valueItem.length === 0) setErro('Não é possível criar um novo item pois o item atual está vazio');
    else setValue((value)=> [...value, '']);
  }

  function handleChange({target}, index) {
    if(erro) setErro(null);
    const valueArray = [...value];
    valueArray[index] = target.value;
    setValue(valueArray);
  }

  return (
    <label className={styleLabel.Label}>
      {name}
      <ul className={style.ListItems}>
        {value.map((item, index)=> 
         <li key={index}>
          <input 
            type="text"
            className={`${styleLabel.Input} ${style.inputs}`} 
            value={item} 
            onChange={(event)=> handleChange(event, index)}
          />
          <div className={style.organizeBtns}>
            {index !== 0 && 
              <button 
                id={style.removeBtn} 
                onClick={(event)=> removeItem(event, index)} 
                className={style.btnActions}
              >
                <Remove/>
              </button>
            }
            {value[index+1] === undefined && 
              <button 
                id={style.createBtn} 
                onClick={(event)=> createItem(event, index)}
                className={style.btnActions}
              >
                <Create/>  
              </button>
            }
          </div>
         </li>
        )}
        {erro && <Error mensagem={erro}/>}
      </ul>
    </label>
  )
}

export default ListItems