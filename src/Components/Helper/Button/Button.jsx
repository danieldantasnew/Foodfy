import style from './Button.module.css';

const Button = ({nome, estilo, props}) => {
  return (
    <button style={estilo} className={style.Botao} {...props}>{nome}</button>
  )
}

export default Button