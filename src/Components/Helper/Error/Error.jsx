import style from './Error.module.css';

const Error = ({mensagem}) => {
  return (
    <p className={style.Error}>{mensagem || "O erro não foi repassado."}</p>
  )
}

export default Error;