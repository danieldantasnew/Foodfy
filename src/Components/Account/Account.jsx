import style from './Account.module.css';
import { Route, Routes } from 'react-router-dom';
import MyRecipes from './MyRecipes/MyRecipes';
import Stats from './Stats/Stats';
import PostRecipe from './PostRecipe/PostRecipe';
import NotFound from '../Helper/NotFound/NotFound';

const Account = () => {
  return (
    <section className={`${style.Account}`}>
      <Routes>
          <Route path='/' element={<MyRecipes/>} />
          <Route path='/estatisticas' element={<Stats/>} />
          <Route path='/postar' element={<PostRecipe/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </section>
  )
}

export default Account