import { Box } from '@mui/material';

import { useAppSelector } from 'store/hooks/hooks';

const ProfilePage = () => {
  const { userCredentials } = useAppSelector(state => state.authReducer);
  const { username } = userCredentials;

  return <Box>{username && <h1>Hello {username}</h1>}</Box>;
};

export default ProfilePage;
