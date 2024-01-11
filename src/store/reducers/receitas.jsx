import { RECIPES_GET } from "../../Api";
import createAsyncSlice from "../CreateAsyncSlice/CreateAsyncSlice";

const receitas = createAsyncSlice({
  name: 'receitas',
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

export default receitas.reducer;