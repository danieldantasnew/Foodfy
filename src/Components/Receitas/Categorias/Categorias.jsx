import React from 'react'
import style from './Categorias.module.css';
import receitasStyle from '../Receitas.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFiltros } from '../../../store/reducers/receitas';

const Categorias = ({mobile}) => {
  const dispatch = useDispatch();
  const [categorias, setCategorias] = React.useState(true);
  const [checked, setChecked] = React.useState(0);
  const lista = useSelector((state)=> state.receitas.categorias);
  const [novaLista, setNovaLista] = React.useState(lista);
  const [categoriaSelecionada, setCategoriaSelecionada] = React.useState('Todas as Categorias');

  React.useEffect(()=> {
    
    if(mobile) setCategorias(false);
    else setCategorias(true);
  }, [mobile]);

  React.useEffect(()=> {
    setNovaLista((novaLista)=> ["Todas as Categorias", ...novaLista]);
  }, []);

  React.useEffect(()=> {
    dispatch(setFiltros({name: 'categoriaSelecionada', value: categoriaSelecionada}));
  }, [categoriaSelecionada, dispatch])

  function handleCategoria() {
    setCategorias(!categorias);
  }

  function handleDispatch(index, {target}) {
    setChecked(index);
    setCategoriaSelecionada(target.innerHTML);
  }

  return (
    <div className={`${style.categorias}`} >
      <div className={`${receitasStyle.titulo} ${categorias ? '' : receitasStyle.rotateDropdown}`} onClick={handleCategoria}>
        <img src="../../../public/Images/icons/Receitas/Categorias.svg" alt="Categorias" />
        <h2>Categorias</h2>
      </div>
      {categorias && 
        <ul>
          {novaLista.map((elemento, index)=>
            <li key={elemento} className={index === checked ? style.ativo : ''} onClick={(event)=> handleDispatch(index, event)}>
              {elemento}
            </li> 
          )}
      </ul>}
      
  </div>
  )
}

export default Categorias;