import { Outlet } from 'react-router-dom';
import { Box, Grid, Container } from '@mui/material/';
import MainHeader from 'components/headers/MainHeader';
import Footer from 'components/footers/Footer';

const MainLayout = () => (
  <>
    <MainHeader />
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container maxWidth={false}>
        <Grid container justifyContent="center" my={4}>
          <Outlet />
        </Grid>
      </Container>
    </Box>
    <Footer />
  </>
);

export default MainLayout;
