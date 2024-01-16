import React from 'react';
import style from './Stats.module.css';
import Title from '../Helper/Titles/Title';

const Stats = () => {
  return (
    <div className={`${style.statsContent} spaceContent animaLeft`}>
      <Title name="Estatísticas" />
      <div>
        <div>Acessos: </div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Stats