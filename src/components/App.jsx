import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from "./Box";
import { refreshCurrentUser } from 'redux/auth/auth-operations';
import { useAuth } from 'hooks/useAuth';
import UserRoutes from './UserRoutes';
import Loader from './Loaders/AuthLoader'

export const App = () => {
  const dispatch = useDispatch();
  const { isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refreshCurrentUser())
  }, [dispatch]);
        
  return (<Box p={5} color="black">
    {isRefresh
      ? <Loader />
      : <UserRoutes />
    }
    </Box>)
} 