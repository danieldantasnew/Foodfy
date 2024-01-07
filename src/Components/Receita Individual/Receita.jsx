import React from 'react';
import style from './Receita.module.css';
import { useParams } from 'react-router-dom';
import InfoReceita from './InfoReceita/InfoReceita';
import ImagemReceita from './ImagemReceita/ImagemReceita';
import Comentarios from '../Receita Individual/Comentarios/Comentarios';
import Dim from './DIM/Dim';

const Receita = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  

  React.useEffect(()=> {
    fetch(`http://foodfyapi.local/json/api/recipe/${params.id}`).then((response)=> response.json()).then((json)=> setData(json));
  }, [params, setData]);

  return (
    <section className={`${style.Receita} animaBottom`}>
      <div className={`${style.content} spaceContent`}>
        {data && 
          <>
            <ImagemReceita 
            nome={data.recipe.nome} 
            src={data.recipe.src} 
            />
            <InfoReceita 
            datePost={data.recipe.date} 
            dificuldade={data.recipe.dificuldade} 
            firstName={data.recipe.firstName} 
            lastName={data.recipe.lastName} 
            tempoPreparo={data.recipe.tempoPreparo} 
            />

            <div className={style.contentInfo}>
              <Dim descricao={data.recipe.descricao} ingredientes={data.recipe.ingredientes} modoPreparo={data.recipe.modoPreparo} />
              <Comentarios />
            </div>
          </>
        }
      </div>
    </section>
  )
}

export default Receita;