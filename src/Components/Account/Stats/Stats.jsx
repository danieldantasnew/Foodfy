import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../../Helper/Error/Error';
import {carregarTodasReceitas, resetToInitialState} from '../../../store/reducers/receitas';
import Carregando from '../../Helper/Carregando/Carregando';
const StatsGraphs = React.lazy(()=> import('./StatsGraphs'));

const Stats = () => {
  const {loading, erro, data} = useSelector((state)=> state.receitas);
  const {id} = useSelector((state)=> state.login.user.data)
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(resetToInitialState());
    dispatch(carregarTodasReceitas({total: 100, user: id}))
  }, [dispatch, id]);

  if(loading) return <Carregando />
  if(erro) return <Error mensagem={erro}/>
  return (
    <React.Suspense fallback={<></>}>
      <StatsGraphs data={data}/>
    </React.Suspense>
  )
}

export default Stats