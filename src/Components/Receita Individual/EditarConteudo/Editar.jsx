import style from './Editar.module.css';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import {useValidate} from '../../../Hooks/useValidate';

const Editar = () => {
  const descricao = useValidate('');
  const ingredientes = useValidate();
  const modoPreparo = useValidate();
  const tempoPreparo = useValidate();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={style.conteudoEditar}>
      <h2>Edite sua Receita</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Descrição" tipo="text" {...descricao} />
        <Input label="Ingredientes" tipo="text" {...ingredientes}/>
        <Input label="Modo de Preparo" tipo="text" {...modoPreparo}/>
        <Input label="Tempo de Preparo" tipo="text" {...tempoPreparo}/>
        <Button  nome="Atualizar receita" />
      </form>
    </div>
  )
}

export default Editar