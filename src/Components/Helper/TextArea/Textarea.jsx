import style from './Textarea.module.css';
import labelInput from '../Input/Input.module.css';
import Error from '../Error/Error';

const Textarea = ({placeholder, name, handleChange, onBlur, erro}) => {
  return (
  <label htmlFor={name} className={labelInput.Label}>
      {name}
      <textarea 
        className={`${style.Textarea}`} 
        placeholder={placeholder || ''} 
        id={name}
        onChange={handleChange} 
        onBlur={onBlur}
        />
        {erro && <Error mensagem={erro} />}
  </label>
  )
}

export default Textarea;