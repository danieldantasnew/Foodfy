import { combineReducers } from "@reduxjs/toolkit";
import { TOKEN_POST, USER_GET } from "../../Api";
import createAsyncSlice from "../CreateAsyncSlice/CreateAsyncSlice";

const token = createAsyncSlice({
  name: 'token',
  fetchConfig: (user)=> TOKEN_POST(user)
});

const fetchToken = token.fetchElement;

const user = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => USER_GET(token), 
});

const fetchUser = user.fetchElement;

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

const reducers = combineReducers({token: token.reducer, user: user.reducer});

export default reducers;