import style from './Textarea.module.css';

const Textarea = ({placeholder, id}) => {
  return (
    <textarea className={`${style.Textarea}`} placeholder={placeholder || ''} id={id}/>
  )
}

export default Textarea