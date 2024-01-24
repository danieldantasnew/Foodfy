import { createSelector } from 'reselect';

const categoria = (categoriaSelecionada) => (elemento)=> {
  if(categoriaSelecionada === "Todas as Categorias") return true;
  else {
   return elemento.categoria == categoriaSelecionada;
  }
}

const filtro = (filtroSelecionado) => (elementoAtual, elementoProximo) => {
  let dataElementoAtual, dataElementoProximo;
  switch (filtroSelecionado) {
    case "Mais antigas":
      dataElementoAtual = new Date(elementoAtual.date);
      dataElementoProximo = new Date(elementoProximo.date);
      return dataElementoAtual - dataElementoProximo;
    case "Mais acessadas":
      return elementoProximo.acessos - elementoAtual.acessos;
    case "Melhor avaliadas":
      return elementoProximo.pesoAvaliacaoComentarios - elementoAtual.pesoAvaliacaoComentarios;
    case "De A-Z":
      return elementoAtual.nome.localeCompare(elementoProximo.nome)
    default:
      return true;
  }
}

export const filtroCategoria = createSelector((state) => state.receitas, (data)=> {
  return data.listRecipes.filter(categoria(data.filtros.categoriaSelecionada))
  .sort(filtro(data.filtros.filtro));
});