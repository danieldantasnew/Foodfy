import Error from '../Error/Error';
import style from './Input.module.css';

const Input = ({tipo, label, estilo, handleChange, erro, onBlur, value}) => {
  
  return (
    <label htmlFor={label} className={style.Label} style={estilo}>
      {label}
      <input type={tipo} id={label} onChange={handleChange} value={value} onBlur={onBlur} className={style.Input} min={0}/>
      {erro && <Error mensagem={erro} />}
    </label>
  )
}

export default Input;