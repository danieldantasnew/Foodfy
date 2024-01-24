import { createSelector } from 'reselect';

const categoria = (categoriaSelecionada) => (elemento)=> {
  if(categoriaSelecionada === "Todas as Categorias") return true;
  else {
   return elemento.categoria == categoriaSelecionada;
  }
}

const filtro = (filtroSelecionado) => (elemento) => {
  switch (filtroSelecionado) {
    case "Mais antigas":
      console.log('algo')
      break;
    case "Mais acessadas":
      console.log('algo')
      break;
    case "Melhor avaliadas":
      console.log('algo')
      break;
    case "De A-Z":
      console.log('algo')
      break;
    default:
      return true;
  }
}

export const filtroCategoria = createSelector((state) => state.receitas, (data)=> {
  return data.listRecipes.filter(categoria(data.filtros.categoriaSelecionada))
  .filter(filtro(data.filtros.filtro));
});