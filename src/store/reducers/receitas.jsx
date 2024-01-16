import { RECIPES_GET } from "../../Api";
import createAsyncSlice from "../CreateAsyncSlice/CreateAsyncSlice";

const receitas = createAsyncSlice({
  name: 'receitas',
  reducers: {
    resetInitialState(state) {
      state.loading = false;
      state.data = null;
      state.erro = null;
    }
  },
  fetchConfig: ({total, page, user})=> RECIPES_GET({total, page, user}),
});


const fetchReceitas = receitas.fetchElement;


export const carregarReceitas = ({total, page, user}) => async(dispatch) => {
  try {
    await dispatch(fetchReceitas({total, page, user}));
  }
  catch(erro) {
    return {}
  }
}

export const resetInitialState = () => (dispatch) => {
  dispatch(resetInitialState());
  //Verificar por que não funciona
}

export default receitas.reducer;