import React from 'react';
import style from './Stats.module.css';
import Title from '../Helper/Titles/Title';
import Head from '../../Helper/Head/Head';

const Stats = () => {
  return (
    <div className={`${style.statsContent} spaceContent animaLeft`}>
      <Head titulo="Estatísticas" descricao="Aqui estão as estatísticas de suas postagens" />
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