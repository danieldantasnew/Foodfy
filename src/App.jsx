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

function App() {

  return (
    <BrowserRouter>
      <main className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/suporte' element={<Suporte/>}/>
          <Route path='/receitas' element={<Receitas/>}/>
          <Route path='/login/*' element={<Login/>}/>
          <Route path='/receita/:id' element={<Receita/>}/>
        </Routes>
        <Footer/>
      </main>
    </BrowserRouter>
  )
}

export default App;
