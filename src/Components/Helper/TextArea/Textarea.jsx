import style from './Textarea.module.css';
import labelInput from '../Input/Input.module.css';

const Textarea = ({placeholder, name}) => {
  return (
  <label htmlFor={name} className={labelInput.Label}>
      {name}
      <textarea className={`${style.Textarea}`} placeholder={placeholder || ''} id={name}/>
  </label>
  )
}

export default Textarea