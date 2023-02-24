import { Outlet } from 'react-router';
import { Box, Paper, Grid, Container } from '@mui/material';

import MainHeader from 'components/headers/MainHeader';
import Footer from 'components/footers/Footer';

const AuthLayout = () => (
  <>
    <MainHeader />
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.alice',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth={false}>
        <Grid container justifyContent="center">
          <Grid item sm={8} md={4}>
            <Paper sx={{ p: 4 }} variant="outlined">
              <Outlet />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Footer />
  </>
);

export default AuthLayout;
