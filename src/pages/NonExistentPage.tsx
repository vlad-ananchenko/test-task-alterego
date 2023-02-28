import { Box, Grid, Container, Typography } from '@mui/material/';
import { useTranslation } from 'react-i18next';

const NonExistentPage = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth={false}>
        <Grid container justifyContent="center">
          <Grid item sm={8} md={4}>
            <Typography align="center" variant="h3" color="error.main">
              {t('nonExistentPage.typography')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NonExistentPage;
