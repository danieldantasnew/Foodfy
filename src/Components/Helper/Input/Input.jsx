import Error from '../Error/Error';
import style from './Input.module.css';

const Input = ({tipo, label, estilo, handleChange, erro, onBlur,  data, placeholder}) => {
  
  return (
    <label htmlFor={label} className={style.Label} style={estilo}>
      {label}
      <input type={tipo} id={label} onChange={handleChange} value={data} onBlur={onBlur} className={style.Input} min={0} placeholder={placeholder}/>
      {erro && <Error mensagem={erro} />}
    </label>
  )
}

export default Input;