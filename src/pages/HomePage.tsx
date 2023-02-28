import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material/';

import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Link
        sx={{ color: 'secondary.dark' }}
        variant="h1"
        component={RouterLink}
        to="news"
      >
        {t('mainPage.typography')}
      </Link>
    </Box>
  );
};

export default HomePage;
