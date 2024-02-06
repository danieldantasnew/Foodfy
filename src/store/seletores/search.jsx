import { createSelector } from 'reselect';

export const removerAcentos = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};


export const filterSearch = (valorDigitado) => (elemento) => {
  if(!valorDigitado) return true;
  else {
    const frases = elemento.title.toUpperCase().split(' ')
    //se na frase ele encontrar alguma palavra relacionada ao valor então ele irá retornar true
    const valorSemAcento = removerAcentos(valorDigitado.toUpperCase());
    return frases.some((palavra)=> {
      const palavraSemAcento = removerAcentos(palavra);
      return palavraSemAcento.includes(valorSemAcento)
    })
  }
}

export const searchSelector = createSelector((state) => state.receitas, (data)=> {
  if(data.data) {
    return data.data.filter(filterSearch(data.search));
  }
});