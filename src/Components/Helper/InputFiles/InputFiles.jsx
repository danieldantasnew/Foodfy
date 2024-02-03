import React from 'react';
import style from './InputFiles.module.css';

const InputFiles = ({imagem, setImagem, inputFile}) => {

  function selecionarFoto() {
    inputFile.current.click();
  }

  function handleChangeImage({target}) {
    if(target.files.length > 0) {
      const arquivo = target.files[0];
      setImagem({
        preview: URL.createObjectURL(arquivo),
        raw: target.files[0],
      })
    }
  }

  return (
    <div 
      className={Object.keys(imagem).length > 0 ? style.imagemReceitaPreenchida : style.imagemReceita}  
      onClick={selecionarFoto}>
      {Object.keys(imagem).length > 0 && 
      <img 
      src={imagem?.preview} 
      alt='Prévia da imagem da receita' 
      />}
      <input 
      type="file" 
      ref={inputFile} 
      onChange={handleChangeImage} 
      style={{display: "none"}}
      />
    </div>
  )
}

export default InputFiles