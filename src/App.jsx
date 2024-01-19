import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from './Components/Principal/Home';
import Sobre from './Components/Sobre/Sobre';
import Suporte from './Components/Suporte/Suporte';
import Receitas from './Components/Receitas/Receitas';
import Login from './Components/Login/Login';
import Receita from './Components/Receita Individual/Receita';
import Account from './Components/Account/Account';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/reducers/login';
import ProtectedRouter from './Components/Account/ProtectedRouter/ProtectedRouter';
import NotFound from './Components/Helper/NotFound/NotFound';

function App() {
  const dispatch = useDispatch();
  React.useEffect(()=> {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <main className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home total={24} user={0}/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/suporte' element={<Suporte/>}/>
          <Route path='/receitas' element={<Receitas total={24} user={0}/>}/>
          <Route path='/login/*' element={<Login/>}/>
          <Route path='/conta/*' element={
          <ProtectedRouter>
            <Account/>
          </ProtectedRouter>}/>
          <Route path='/receita/:id' element={<Receita/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App;
