import style from './Button.module.css';

const Button = ({nome, estilo}) => {
  return (
    <button style={estilo} className={style.Botao}>{nome}</button>
  )
}

export default Button