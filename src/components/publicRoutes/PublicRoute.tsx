import { ReactElement, useEffect } from 'react';

import LoadingToRedirect from 'components/redirect/LoadingToRedirect';
import { useGetUserCredentials } from 'hooks/useGetUserCredentials';

const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { getUser, username } = useGetUserCredentials();

  useEffect(() => {
    getUser();
  }, [username]);

  return !username ? children : <LoadingToRedirect authenticated />;
};
export default PublicRoute;
