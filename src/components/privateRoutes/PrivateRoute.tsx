import { ReactElement } from 'react';

import LoadingToRedirect from 'components/redirect/LoadingToRedirect';
import { useAppSelector } from 'store/hooks/hooks';

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const { userCredentials } = useAppSelector(state => state.authReducer);
  const { username, password } = userCredentials;

  return username && password ? children : <LoadingToRedirect />;
};
export default PrivateRoute;
