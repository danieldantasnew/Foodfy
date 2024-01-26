import React from 'react';
import style from './Receita.module.css';
import Carregando from '../Helper/Carregando/Carregando';
import { useNavigate, useParams } from 'react-router-dom';
import InfoReceita from './InfoReceita/InfoReceita';
import ImagemReceita from './ImagemReceita/ImagemReceita';
import Comentarios from '../Receita Individual/Comentarios/Comentarios';
import Dim from './DIM/Dim';
import Modal from '../Helper/Modal/Modal'
import Editar from './EditarConteudo/Editar';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error/Error';

const Receita = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const {carregando, erro, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(()=> {
    async function handleRecipe() {
      const {response, json} = await request(`http://foodfyapi.local/json/api/recipe/${params.id}`);
      if(response.ok) setData(json);
    }

    handleRecipe()
  }, [params, setData, request]);

  React.useEffect(()=> {
    if(erro) {
      setTimeout(()=> {
        navigate('/')
      }, 3000);
    }
  }, [erro, navigate]);

  if(erro) return <Error mensagem={erro} estilo={style.receitaErro}/>
  if(carregando) return <Carregando />
  return (
    <>
    {modal && data && 
    <>
      <Modal setFechar={setModal}/>
      <Editar data={data}/>
    </>}
    <section className={`${style.Receita} animaBottom`}>
      <div className={`${style.content} spaceContent`}>
        {data && 
          <>
            <ImagemReceita 
            nome={data.recipe.nome} 
            src={data.recipe.src}
            media={data.recipe.mediaAvaliacao}
            totalComentarios={data.comments.length}
            setModal={setModal}
            author = {data.recipe.author}
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
              <Comentarios comentarios={data.comments}/>
            </div>
          </>
        }
      </div>
    </section>
    </>
  )
}

export default Receita;