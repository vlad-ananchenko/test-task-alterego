import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from 'store/hooks/hooks';

const ProfilePage = () => {
  const { t } = useTranslation();
  const { userCredentials } = useAppSelector(state => state.authReducer);
  const { username } = userCredentials;

  return (
    <Box>
      {username && (
        <h1>
          {t('profilePage.typography')} {username}!
        </h1>
      )}
    </Box>
  );
};

export default ProfilePage;
