import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({children}) => {
  const {data} = useSelector((state)=> state.login.user);

  if(data) return children;
  else if(!data) return <Navigate to='/login'/>
  else return null;
}

export default ProtectedRouter;