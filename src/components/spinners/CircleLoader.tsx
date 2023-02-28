import { Box } from '@mui/material';
import ClipLoader from 'react-spinners/ClipLoader';

const CircleLoader = () => (
  <Box>
    <ClipLoader size={250} color="#14746f" aria-label="Loading Spinner" />
  </Box>
);

export default CircleLoader;
