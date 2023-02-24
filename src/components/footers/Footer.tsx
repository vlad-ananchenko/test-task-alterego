import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Footer = () => (
  <Box
    sx={{
      color: 'primary.contrastText',
      bgcolor: 'secondary.dark',
      display: 'flex',
      justifyContent: 'center',
      p: 3
    }}
  >
    <Typography variant="subtitle1">
      &#169; &nbsp;
      {new Date().getFullYear()} Vlad Ananchenko
    </Typography>
  </Box>
);

export default Footer;
