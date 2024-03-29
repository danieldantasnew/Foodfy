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
import EditarComentario from './Comentarios/Comentar/EditarComentario/EditarComentario';
import Head from '../Helper/Head/Head';

const Receita = () => {
  const params = useParams();
  const [data, setData] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const [modalComentario, setModalComentario] = React.useState(null);
  const [listaComentarios, setListaComentarios] = React.useState([]);
  const {carregando, erro, request} = useFetch();
  const navigate = useNavigate();

  React.useEffect(()=> {
    async function handleRecipe() {
      const {response, json} = await request(`http://foodfyapi.local/json/api/recipe/${params.id}`);
      if(response.ok) setData(json);
    }

    handleRecipe();
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
    {modalComentario && 
    <>
      <Modal setFechar={setModalComentario}/>
      <EditarComentario listaComentarios={listaComentarios} setListaComentarios={setListaComentarios} setModalComentario={setModalComentario} />
    </>}
    <section className={`${style.Receita} animaBottom`}>
      <div className={`${style.content} spaceContent`}>
        {data && 
          <>
            <Head titulo={data.recipe.nome} descricao={`Informações da receita ${data.recipe.nome}`}/>
            <ImagemReceita 
            nome={data.recipe.nome} 
            src={data.recipe.src}
            media={data.recipe.mediaAvaliacao}
            totalComentarios={data.comments.length}
            setModal={setModal}
            author = {data.recipe.author}
            id={data.recipe.id}
            />
            <InfoReceita 
            datePost={data.recipe.date} 
            dificuldade={data.recipe.dificuldade} 
            firstName={data.recipe.firstName} 
            lastName={data.recipe.lastName} 
            tempoPreparo={data.recipe.tempoPreparo}
            user={data.recipe.author} 
            />

            <div className={style.contentInfo}>
              <Dim descricao={data.recipe.descricao} ingredientes={data.recipe.ingredientes} modoPreparo={data.recipe.modoPreparo} />
              <Comentarios comentarios={data.comments} setModalComentario={setModalComentario} listaComentarios={listaComentarios} setListaComentarios={setListaComentarios} authorReceita={data.recipe.author}/>
            </div>
          </>
        }
      </div>
    </section>
    </>
  )
}

export default Receita;