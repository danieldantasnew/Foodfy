import React from "react";

const useFetch = () => {
  const [carregando, setCarregando] = React.useState(false);
  const [dados, setDados] = React.useState(null);
  const [erro, setErro] = React.useState(null);

  const request = React.useCallback(async (url, options)=> {
    let response; 
    let json;

    try {
      setErro(null);
      setCarregando(true);
      response = await fetch(url, options);
      json = await response.json();
      if(!response.ok) throw new Error(json.message);
    } catch(err) {
      json = null;
      setErro(err.message)
    }
    finally {
      setCarregando(false);
      setDados(json);
    }

    return {
      response,
      json
    }
  }, []);

  return {
    carregando,
    erro,
    setErro,
    dados,
    request
  }
}

export default useFetch;