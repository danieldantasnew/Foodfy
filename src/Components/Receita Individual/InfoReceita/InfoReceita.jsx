import style from './InfoReceita.module.css';
import React from 'react';

const InfoReceita = ({firstName, lastName, dificuldade, tempoPreparo, datePost}) => {

  const [date, setDate] = React.useState('');

  React.useEffect(()=> {
    function corrigeData (data) {
      const partesDaData = data.split(/[- :]/); //Divide cada parte da timestamp ano-mes-dia 00:00:00
      const dia = partesDaData[2];
      const mes = partesDaData[1];
      const ano = partesDaData[0];
      
      const dataFormatada = `${dia}/${mes}/${ano}`; 
      return dataFormatada;
    }

    if(datePost) {
      setDate(corrigeData(datePost));
    }
  }, [datePost, date]);

  return (
    <div className={style.info}>
    <div className={style.subInfo}>
      <div className={style.autor}>
        <p>por {firstName} {lastName}</p>
      </div>
      <div className={style.infoComplementar}>
        <p>
          <img src="../../../public/Images/icons/Receita Individual/Dificuldade.svg" alt="Dificuldade da receita" />
          {"Nível: " + dificuldade}
        </p>
        <p>
          <img src="../../../public/Images/icons/Receita Individual/Calendario.svg" alt="Data de publicação" />
          {date ? date : ''}
        </p>
        <p>
          <img src="../../../public/Images/icons/Receita Individual/Timer.svg" alt="Tempo para Preparo" />
          {tempoPreparo + `${tempoPreparo <= 1 ? " Min" : " Mins"}`}
        </p>
      </div>
    </div>
  </div>
  )
}

export default InfoReceita