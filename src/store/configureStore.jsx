import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./reducers/login";
import receitas from "./reducers/receitas";
import localStorage from "./Middleware/localStorage";

const reducer = combineReducers({ login, receitas });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage),
});

export default store;
