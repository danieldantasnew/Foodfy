import style from './Error.module.css';

const Error = ({mensagem, estilo}) => {
  return (
    <p className={`${style.Error} ${estilo || ''}`}>{mensagem || "O erro não foi repassado."}</p>
  )
}

export default Error;