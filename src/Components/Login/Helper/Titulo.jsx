import style from './Titulo.module.css';

const Titulo = ({titulo}) => {
  return (
    <div className={style.titulo}>
      <h1>{titulo}</h1>
      <img src="../../../../public/Images/icons/Login/Chef Icon.svg" alt="Ícone chefe" />
  </div>
  )
}

export default Titulo