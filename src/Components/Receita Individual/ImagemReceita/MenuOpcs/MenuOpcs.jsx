import React from 'react';
import style from './MenuOpcs.module.css';
import useFetch from '../../../../Hooks/useFetch';
import { RECIPE_DELETE } from '../../../../Api';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MenuOpcs = ({setModal, setMenu, id}) => {
  const {request} = useFetch();
  const navigate = useNavigate();
  const token = useSelector((state)=> state.login.token.data?.token);

  function handleClick() {
    setMenu((menu)=> !menu);
    setModal((modal)=>!modal);
  }

  async function handleDelete() {
    const confirmaDelete = window.confirm('Deseja realmente deletar essa receita?');
    if(confirmaDelete) {
      const{url, options} = RECIPE_DELETE(id, token);
      const {response, json} = await request(url, options);
      if(response.ok) {
        window.alert(json);
        navigate('/receitas');
        window.location.reload();
      }
      else window.alert('Erro: não foi possível deletar receita.');
    }
  }

  return (
    <div className={style.menuOpcs}>
      <ul>
        <li>
          <div onClick={handleClick}>
            <img src="../../../../public/Images/icons/Receita Individual/Editar.svg" alt="Editar receita" />
            <p>Editar</p>
          </div>
        </li>
        <li className={style.delete}>
          <div onClick={handleDelete}>
            <img src="../../../../public/Images/icons/Receita Individual/Deletar.svg" alt="Deletar receita" />
            <p>Deletar</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MenuOpcs