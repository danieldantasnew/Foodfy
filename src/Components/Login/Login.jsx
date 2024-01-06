import { Route, Routes } from 'react-router-dom';
import PagLogin from './PagLogin/PagLogin';
import Cadastro from './Cadastro/Cadastro';
import style from './Login.module.css'
import Skeleton from '../Helper/Skeleton/Skeleton';
import useMedia from '../../Hooks/useMedia';
import PasswordLost from './PasswordLost/PasswordLost';

const Login = () => {
  const mobile = useMedia("(max-width: 56.1875rem)");

  return (
    <section className={style.Login}>
      {!mobile &&       
      <Skeleton src="https://source.unsplash.com/collection/865198/1000x1000" alt="foto "/>}
      <Routes>
        <Route path='/' element={<PagLogin/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='passwordLost' element={<PasswordLost/>}/>
      </Routes>
    </section>
  )
}

export default Login;