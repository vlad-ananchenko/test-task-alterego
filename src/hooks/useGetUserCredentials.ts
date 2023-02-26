import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { getUser, logOut } from 'store/reducers/authSlice';

export const useGetUserCredentials = () => {
  const dispatch = useAppDispatch();
  const { userCredentials } = useAppSelector(state => state.authReducer);
  const { username } = userCredentials;

  return {
    username,
    getUser: () => dispatch(getUser()),
    logOut: () => dispatch(logOut())
  };
};
