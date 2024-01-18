import { createSelector } from "reselect";
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