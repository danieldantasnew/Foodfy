import style from './Select.module.css';

const Select = ({array, id}) => {
  return (
    <select id={id} className={style.Selecione}>
      {array.map((elemento) =>
        <option key={elemento} value={elemento}>{elemento}</option>
      )}
    </select>
  )
}

export default Select