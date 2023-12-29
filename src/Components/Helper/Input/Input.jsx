import style from './Input.module.css';

const Input = ({tipo, label, estilo, ...props}) => {
  return (
    <label htmlFor={label} className={style.Label} style={estilo}>
      {label}
      <input type={tipo} id={label} className={style.Input} {...props}/>
  </label>
  )
}

export default Input;