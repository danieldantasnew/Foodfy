import { RECIPES_GET } from "../../Api";
import createAsyncSlice from "../CreateAsyncSlice/CreateAsyncSlice";

const receitas = createAsyncSlice({
  name: 'receitas',
  initialState: {
    listRecipes: [],
    page: 1,
    stopRecipes: false,
    categorias: ["Acompanhamentos","Arroz", "Aves", "Alimentação Saudável", "Bebidas", "Bolos e Tortas", "Carnes", "Doces e Sobremesas", "Iguaria", "Lanches", "Massas", "Peixes e Frutos do Mar", "Refeições", "Saladas e Molhos"],
    dificuldades: ["muito fácil", "fácil", "médio", "difícil", "avançado"],
    filtros: {
      filtro: "",
      categoriaSelecionada: "Todas as Categorias",
      input: "",
    }
  },
  reducers: {
    newRecipes(state, action) {
      state.listRecipes.push(...action.payload);
    },
    addNextPage(state) {
      state.page++;
    },
    stopRecipes(state) {
      state.stopRecipes = true;
    },
    setFiltros(state, action) {
      //como estou retornando um objeto com name e value dentro do payload então consigo acessar categoriaSelecionada ou filtro, dependendo do action.payload.name que eu passar.
      state.filtros[action.payload.name] = action.payload.value;
    },
    resetToInitialState(state) {
      state.loading = false; 
      state.data = null;
      state.error = null;
    }
  },
  fetchConfig: ({total, page, user})=> RECIPES_GET({total, page, user}),
});


const fetchReceitas = receitas.fetchElement;
export const {newRecipes, addNextPage, setFiltros, stopRecipes, resetToInitialState} = receitas.actions;


export const carregarReceitas = ({total, user}) => async(dispatch, getState) => {
  try {
   const {payload} = await dispatch(fetchReceitas({total, page: getState().receitas.page, user}));
    const lista = getState().receitas.listRecipes;
    const novaLista = [];
    payload.forEach((elemento)=> {
      //Verifica se o novo elemento não está presente na lista, se sim ele inclui
      if(lista.findIndex((receita)=> receita.id === elemento.id) === -1) novaLista.push(elemento);
    });
    
    (novaLista.length > 0) ? 
    dispatch(newRecipes(novaLista)) && dispatch(addNextPage()): 
    dispatch(stopRecipes());
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

export default receitas.reducer;