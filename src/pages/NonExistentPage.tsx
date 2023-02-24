import { Box, Grid, Container, Typography } from '@mui/material/';

const NonExistentPage = () => (
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
            This page does not exist...
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default NonExistentPage;
