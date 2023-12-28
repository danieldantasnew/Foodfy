import style from './Footer.module.css';
import Menu from '../Helper/Navigation/Menu';

import SocialMedia from '../Helper/SocialMedia/SocialMedia';
import Logo from '../Helper/Logo/Logo';

const Footer = () => {
  return (
    <footer>
      <section className={style.footerMain}>
        <section className={style.contentFooter}>
          <div className={style.footer1}>
            <Logo/>
            <Menu/>
          </div>
          <div className={style.footer2}>
            <h2>Siga-nos</h2>
            <SocialMedia/>
          </div>
        </section>
      </section>
      <div className={style.rights}><p>Todos os direitos reservados.<strong> Foodfy.</strong></p></div>
    </footer>
  )
}

export default Footer