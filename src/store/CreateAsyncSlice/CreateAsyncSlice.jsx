import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */

const createAsyncSlice = (config) => {

  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false, 
      data: null,
      error: null,
      ...config.initialState
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSucess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      ...config.reducers
    }
  });

  const {fetchStarted, fetchSucess, fetchError} = slice.actions;

  const fetchElement = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());
      const {url, options} = config.fetchConfig(payload); 
      const response = await fetch(url, options);
      const json = await response.json();
      if(!response.ok) throw new Error(json.message);
      return dispatch(fetchSucess(json));
    }
    catch(error) {
      return dispatch(fetchError(error.message));
    }
  }

  return {...slice, fetchElement};
}

export default createAsyncSlice;