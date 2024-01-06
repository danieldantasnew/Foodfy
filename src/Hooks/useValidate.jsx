import React from 'react';

const types = {
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u,
    mensagem: "Por favor, digite um e-mail válido!"
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    mensagem: "Por favor, digite uma senha válida! (Letras e Números)"
  }
}

export const useValidate = (type) => {
  const [data, setData] = React.useState('');
  const [erro, setErro] = React.useState(null);

  function validate (dado) {
    if(type === false) {
      return true;
    }

    if(dado.length === 0) {
      setErro("Por favor, preencha este campo.");
      return false;
    }
    else if(types[type] && !types[type].regex.test(dado)) {
      setErro(types[type].mensagem);
      return false;
    }
    else {
      setErro(null);
      return true;
    }
  }

  function handleChange({target}) {
    if(erro) validate(data)
    setData(target.value);
  }

  return {
    data,
    setData,
    erro,
    setErro,
    handleChange,
    validate: ()=> validate(data),
    onBlur: ()=> validate(data)
  }
}