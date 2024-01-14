import { combineReducers } from "@reduxjs/toolkit";
import { TOKEN_POST, USER_GET } from "../../Api";
import createAsyncSlice from "../CreateAsyncSlice/CreateAsyncSlice";
import getLocalStorage from "../Helper/getLocalStorage";

const token = createAsyncSlice({
  name: 'token',
  initialState: {
    data: getLocalStorage('token', null),
  },
  fetchConfig: (user)=> TOKEN_POST(user),
  reducers: {
    resetTokenErro(state) {
      state.error = null;
    },
    fetchSucess: {
      reducer: (state, action)=> {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare: (payload) => {
        return {
          payload,
          meta: {
            localStorage: {
              key: 'token',
              value: payload.token,
            }
          }
        }
      }
    },
    returnInitialState(state) {
      state.loading = false;
      state.data = null;
      state.erro = null;
    }
  }
});

const fetchToken = token.fetchElement;
const {resetTokenErro, returnInitialState} = token.actions;

const user = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => USER_GET(token), 
  reducers: {
    returnInitialState(state) {
      state.loading = false;
      state.data = null;
      state.erro = null;
    }
  }
});

const fetchUser = user.fetchElement;
const estadoInicialUser = user.actions.returnInitialState;

export const autoLogin = ()=> async (dispatch, getState) => {
  const {data} = getState().login.token;
  if(data) dispatch(fetchUser(data));
}

export const login = (user) => async (dispatch)=> {
  try {
    const {payload} = await dispatch(fetchToken(user));
    if(payload.token) {
      await dispatch(fetchUser(payload.token));
    }
  }catch {
    return {};
  }
}

export const logOut = ()=> (dispatch) => {
  dispatch(returnInitialState());
  dispatch(estadoInicialUser());
  window.localStorage.removeItem('token');
}



export const resetarErro = () => (dispatch) => {
  dispatch(resetTokenErro());
}

const reducers = combineReducers({token: token.reducer, user: user.reducer});

export default reducers;