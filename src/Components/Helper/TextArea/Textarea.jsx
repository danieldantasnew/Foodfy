import style from './Textarea.module.css';
import labelInput from '../Input/Input.module.css';

const Textarea = ({placeholder, name, value, setValue}) => {

  function handleChange({target}) {
    setValue(target.value)
  }

  return (
  <label htmlFor={name} className={labelInput.Label}>
      {name}
      <textarea 
        className={`${style.Textarea}`} 
        placeholder={placeholder || ''} 
        id={name}
        value={value}
        onChange={handleChange}
        />
  </label>
  )
}

export default Textarea;