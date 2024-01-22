import { createSelector } from "reselect";
import { RECIPES_GET } from "../../Api";
import createAsyncSlice from "../CreateAsyncSlice/CreateAsyncSlice";

const receitas = createAsyncSlice({
  name: 'receitas',
  initialState: {
    listRecipes: [],
    page: 1,
    stopRecipes: false,
    categorias: ["Arroz", "Aves", "Alimentação Saudável", "Bebidas", "Bolos e Tortas", "Carnes", "Doces e Sobremesas", "Lanches", "Massas", "Peixes e Frutos do Mar", "Refeições", "Saladas e Molhos"],
    dificuldades: ["muito fácil", "fácil", "médio", "difícil", "avançado"]
  },
  reducers: {
    newRecipes(state, action) {
      state.listRecipes.push(...action.payload);
      if(action.payload.length === 0) state.stopRecipes = true;
    },
    addNextPage(state) {
      state.page++;
    }
  },
  fetchConfig: ({total, page, user})=> RECIPES_GET({total, page, user}),
});


const fetchReceitas = receitas.fetchElement;
const {newRecipes, addNextPage} = receitas.actions;


export const carregarReceitas = ({total, user}) => async(dispatch, getState) => {
  try {
   const {payload} = await dispatch(fetchReceitas({total, page: getState().receitas.page, user}));
    const lista = getState().receitas.listRecipes;
    const novaLista = [];
    payload.forEach((elemento)=> {
      //Verifica se o novo elemento não está presente na lista, se sim ele inclui
      if(lista.findIndex((receita)=> receita.id === elemento.id) === -1) novaLista.push(elemento);
    });
    dispatch(newRecipes(novaLista));
    dispatch(addNextPage());
  }
  catch(erro) {
    return {}
  }
}

export const carregarTodasReceitas = ({total, user}) => async(dispatch) => {
  try {
   await dispatch(fetchReceitas({total, page: 1, user}));
  }
  catch(erro) {
    return {}
  }
}

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

export default receitas.reducer;