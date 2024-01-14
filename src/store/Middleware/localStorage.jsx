const localStorage = (store) => (next) => (action) => {
  const result = next(action)

  if(action.meta && action.meta.localStorage) {
    window.localStorage.setItem(action.meta.localStorage.key, JSON.stringify(action.meta.localStorage.value));
  }

  return result;
}

export default localStorage;