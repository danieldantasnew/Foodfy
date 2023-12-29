import React from 'react';
import style from './Skeleton.module.css';


const Skeleton = ({src, alt, ...props}) => {

  const [skeleton, setSkeleton] = React.useState(true);

  function handleImage({target}) {
    setSkeleton(false);
    target.style.opacity = 1;
    target.style.display = "block";
  }

  return (
    <div className={style.imagem}>
      {skeleton && <div className={style.skeleton}></div>}
      <img src={src} onLoad={handleImage} alt={alt} {...props} />
    </div>
  )
}

export default Skeleton