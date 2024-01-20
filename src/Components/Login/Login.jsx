import { Navigate, Route, Routes } from 'react-router-dom';
import PagLogin from './PagLogin/PagLogin';
import Cadastro from './Cadastro/Cadastro';
import style from './Login.module.css'
import Skeleton from '../Helper/Skeleton/Skeleton';
import useMedia from '../../Hooks/useMedia';
import PasswordLost from './PasswordLost/PasswordLost';
import { useSelector } from 'react-redux';
import NotFound from '../Helper/NotFound/NotFound';
import Reset from './PasswordLost/Reset';

const Login = () => {
  const mobile = useMedia("(max-width: 56.1875rem)");
  const login = useSelector((state)=> state.login.user.data);

  if(login) return <Navigate to='/conta'/>

  return (
    <section className={style.Login}>
      {!mobile &&       
      <Skeleton src="https://source.unsplash.com/collection/865198/1000x1000" alt="foto "/>}
      <Routes>
        <Route path='/' element={<PagLogin/>}/>
        <Route path='cadastro' element={<Cadastro/>}/>
        <Route path='passwordLost' element={<PasswordLost/>}/>
        <Route path='reset' element={<Reset/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </section>
  )
}

export default Login;