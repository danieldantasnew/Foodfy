import style from './Editar.module.css';
import Input from '../../Helper/Input/Input';
import Button from '../../Helper/Button/Button';
import {useValidate} from '../../../Hooks/useValidate';
import Textarea from '../../Helper/TextArea/Textarea';
import styleLabel from '../../Helper/Input/Input.module.css';
import Select from '../../Helper/Select/Select';

const Editar = () => {
  const tempoPreparo = useValidate();
  const categorias = ["Arroz", "Aves", "Alimentação Saudável", "Bebidas", "Bolos e Tortas", "Carnes", "Doces e Sobremesas", "Lanches", "Massas", "Peixes e Frutos do Mar", "Refeições", "Saladas e Molhos"];
  const dificuldades = ["fácil", "médio", "difícil"];

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className={style.conteudoEditar}>
      <h2>Edite sua Receita</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Descrição" className={styleLabel.Label}>
          Descrição
          <Textarea 
            id={"Descrição"}
          />
        </label>
        <div className={style.organizaSelects}>
          <label htmlFor="dificuldade" className={styleLabel.Label}>
            Dificuldade
            <Select array={dificuldades} id="dificuldade" />
          </label>
          <label htmlFor="categoria" className={styleLabel.Label}>
            Categoria
            <Select array={categorias} id="categoria"/>
          </label>
        </div>
        <label htmlFor="Ingredientes" className={styleLabel.Label}>
          Ingredientes
          <Textarea 
          placeholder={"Insira um ingrediente por linha"}
            id={"Ingredientes"}
          />
        </label>
        <label htmlFor="Modo de Preparo" className={styleLabel.Label}>
          Modo de Preparo
          <Textarea 
            id={"Modo de Preparo"}
          />
        </label>
        <Input label="Tempo de Preparo (Minutos)" tipo="text" {...tempoPreparo}/>
        <Button  nome="Atualizar receita" />
      </form>
    </div>
  )
}

export default Editar