import { combineReducers, configureStore } from "@reduxjs/toolkit";
import login from "./reducers/login";

const reducer = combineReducers({ login });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
