

import { useSelector } from 'react-redux';
import {
  getStatusLoading,
  getStatusError,
  getUsername,
  getStatusRefresh,
  getIsLoggedIn
} from 'redux/auth/auth-selectors';


export const useAuth = () => {
  const isLoading = useSelector(getStatusLoading);
  const isError = useSelector(getStatusError);
  const userName = useSelector(getUsername);
  const isRefresh = useSelector(getStatusRefresh);
  const isUserLogin = useSelector(getIsLoggedIn)
  return {
    isLoading,
    isError,
    userName,
    isRefresh,
    isUserLogin
  };
};