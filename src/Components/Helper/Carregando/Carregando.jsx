import Modal from '../Modal/Modal';
import style from './Carregando.module.css';
import {ReactComponent as Chapeu} from '../../../../public/Images/icons/Chapéu CHEF.svg';

const Carregando = () => {
  return (
    <>
      <Modal />
      <div className={style.Carregando}>
        <div className={style.content}>
          <Chapeu />
        </div>
      </div>
    </>
  )
}

export default Carregando;