import Error from '../Error/Error';
import style from './Input.module.css';

const Input = ({tipo, label, estilo, handleChange, erro, onBlur}) => {
  return (
    <label htmlFor={label} className={style.Label} style={estilo}>
      {label}
      <input type={tipo} id={label} onChange={handleChange} onBlur={onBlur} className={style.Input}/>
      {erro && <Error mensagem={erro} />}
  </label>
  )
}

export default Input;