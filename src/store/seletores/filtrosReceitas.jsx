import { createSelector } from 'reselect';

//Com o reselect posso colocar meu seletor na memória e evitar re-renderizações desnecessárias para um array que não mudou o seu valor, apenas sua referência. Com o reselect tbm é possível fazer outras coisas mas no meu caso de uso foi esse.
export const filtroMaisAcessadas = createSelector((state)=> state.receitas.data, (data)=> {
  if(data) {
    const copiaStateArray = [...data];
    copiaStateArray.sort((anterior, proximo)=> {
      return proximo.acessos - anterior.acessos;
    });
    copiaStateArray.splice(9);

    return copiaStateArray;
  }
});

const removerAcentos = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};


const valorDigitado = (valor) => (elemento) => {
  if(!valor) return true;
  else {
    const frases = elemento.title.toUpperCase().split(' ')
    //se na frase ele encontrar alguma palavra relacionada ao valor então ele irá retornar true
    const valorSemAcento = removerAcentos(valor.toUpperCase());
    return frases.some((palavra)=> {
      const palavraSemAcento = removerAcentos(palavra);
      return palavraSemAcento.includes(valorSemAcento)
    })
  }
}

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
  .sort(filtro(data.filtros.filtro)).filter(valorDigitado(data.filtros.input));
});

