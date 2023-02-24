import { ReactElement, useEffect } from 'react';

import LoadingToRedirect from 'components/redirect/LoadingToRedirect';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { authSlice } from 'store/reducers/authSlice';

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const dispatch = useAppDispatch();
  const { userCredentials } = useAppSelector(state => state.authReducer);

  const { username } = userCredentials;
  const { getUser } = authSlice.actions;

  useEffect(() => {
    dispatch(getUser());
  }, [username]);

  return !username ? children : <LoadingToRedirect authenticated />;
};
export default PublicRoute;
