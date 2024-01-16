import style from './Select.module.css';
import styleLabel from '../Input/Input.module.css';

const Select = ({array, name}) => {
  return (
    <label htmlFor={name} className={styleLabel.Label}>
      {name}
      <select id={name} className={style.Selecione}>
        {array.map((elemento) =>
          <option key={elemento} value={elemento}>{elemento}</option>
        )}
      </select>
    </label>
  )
}

export default Select