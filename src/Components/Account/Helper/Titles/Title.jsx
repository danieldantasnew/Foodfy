import style from './Title.module.css';

const Title = ({name}) => {
  return (
    <h2 className={style.Title}>{name}</h2>
  )
}

export default Title;