import style from './Modal.module.css';

const Modal = ({setFechar}) =>{
  return (
    <div className={style.Modal} {...(setFechar && {onClick: (fechar)=> setFechar(!fechar)})}></div>
  )
}

export default Modal;