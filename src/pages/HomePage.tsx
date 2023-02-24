import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material/';

const HomePage = () => (
  <Box>
    <Link
      sx={{ color: 'secondary.dark' }}
      variant="h1"
      component={RouterLink}
      to="news"
    >
      News
    </Link>
  </Box>
);

export default HomePage;
