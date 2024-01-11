import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./reducers/login";
import receitas from "./reducers/receitas";

const reducer = combineReducers({ login, receitas });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
