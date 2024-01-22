import {ReactComponent as Plus} from '../../../../public/Images/icons/De uso Geral/adicionar nova receita.svg';
import { carregarReceitas } from '../../../store/reducers/receitas';
import style from './CarregarMaisReceitas.module.css';
import { useDispatch } from 'react-redux';

const CarregarMaisReceitas = ({total, user}) => {
  const dispatch = useDispatch();


  function handleClick() {
    dispatch(carregarReceitas({total, user}));
  }

  return (
    <div className={style.CarregarMaisReceitas} onClick={handleClick}>
      <Plus/>
    </div>
  )
}

export default CarregarMaisReceitas;