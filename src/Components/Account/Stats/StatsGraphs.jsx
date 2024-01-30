import React from 'react';
import style from './Stats.module.css';
import Title from '../Helper/Titles/Title';
import Head from '../../Helper/Head/Head';
import { VictoryPie, VictoryTheme, VictoryLabel } from 'victory';


const StatsGraphs = ({data}) => {
  const [grafico, setGrafico] = React.useState(null);
  const[totalAcessos, setTotalAcessos] = React.useState(0);

  React.useEffect(()=> {
    const graphs = data && data.map((item)=> {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    });
    setGrafico(graphs);

    setTotalAcessos(data && data.map(({acessos}) => Number(acessos)).reduce((acumulador, atual) => acumulador + atual, 0));
  }, [data]);

  return (
    <div className={`${style.statsContent} spaceContent animaLeft`}>
      <Head titulo="Estatísticas" descricao="Aqui estão as estatísticas de suas postagens" />
      <Title name="Estatísticas" />
      <div className={style.stats}>
        <div className={style.acessos}>Total de acessos: {totalAcessos}
        </div>
        <div className={`${style.graficoPizza} animaTop`}>
          <VictoryPie
            data={grafico}
            animate={{
              duration: 500
            }}
            theme={VictoryTheme.material}
            style={{
              labels: {
                fontSize: 6, fill: "var(--titulos)"
              }
            }}
            labelComponent={<VictoryLabel angle={40}/>}
            labelPosition={"centroid"}
          />
        </div>
      </div>
    </div>
  )
}

export default StatsGraphs;