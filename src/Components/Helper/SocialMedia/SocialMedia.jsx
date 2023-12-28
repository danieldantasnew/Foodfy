import style from './SocialMedia.module.css';

const SocialMedia = () => {
  return (
    <div className={style.Social}>
      <a href="https://www.facebook.com.br" target='_blank'  rel="noopener noreferrer"><img src="../../../public/Images/icons/De uso Geral/facebook.svg" alt="facebook" className={style.facebook}/></a>
      <a href="https://www.instagram.com.br" target='_blank'  rel="noopener noreferrer"><img src="../../../public/Images/icons/De uso Geral/instagram.svg" alt="instagram" className={style.instagram} /></a>
      <a href="https://www.x.com" target='_blank'  rel="noopener noreferrer"><img src="../../../public/Images/icons/De uso Geral/twitter.svg" alt="twitter" className={style.twitter} /></a>
      <a href="https://www.youtube.com.br" target='_blank'  rel="noopener noreferrer"><img src="../../../public/Images/icons/De uso Geral/youtube.svg" alt="youtube" className={style.youtube} /></a>
    </div>
  )
}

export default SocialMedia;