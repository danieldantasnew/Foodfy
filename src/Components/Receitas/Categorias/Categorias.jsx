import React from 'react'
import style from './Categorias.module.css';
import receitasStyle from '../Receitas.module.css';

const Categorias = ({mobile}) => {
  const [categorias, setCategorias] = React.useState(true);
  const [checked, setChecked] = React.useState(0);
  const lista = ["Todas as categorias", "Aves", "Alimentação Saudável", "Bebidas", "Bolos e Tortas", "Carnes", "Doces e Sobremesas", "Lanches", "Massas", "Peixes e Frutos do Mar", "Saladas e Molhos"];

  React.useEffect(()=> {
    if(mobile) setCategorias(false);
    else setCategorias(true);
  }, [mobile]);



  function handleCategoria() {
    setCategorias(!categorias);
  }



  return (
    <div className={`${style.categorias}`} >
      <div className={`${receitasStyle.titulo} ${categorias ? '' : receitasStyle.rotateDropdown}`} onClick={handleCategoria}>
        <img src="../../../public/Images/icons/Receitas/Categorias.svg" alt="" />
        <h2>Categorias</h2>
      </div>
      {categorias && 
        <ul>
          {lista.map((elemento, index)=>
            <li key={elemento} className={index === checked ? style.ativo : ''} onClick={()=> setChecked(index)}>{elemento}</li> 
          )}
      </ul>}
  </div>
  )
}

export default Categorias