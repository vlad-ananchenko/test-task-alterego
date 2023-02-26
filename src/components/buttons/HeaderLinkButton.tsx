import { Link as RouterLink } from 'react-router-dom';
import { IconButton, Link } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';

interface IHeaderLinkButtonProps {
  name?: string;
  color?: string;
  url?: string;
  isLogo?: boolean;
}

const HeaderLinkButton = ({
  color,
  url = '/',
  name = '',
  isLogo = false
}: IHeaderLinkButtonProps) => (
  <Link
    underline="none"
    sx={{
      color
    }}
    component={RouterLink}
    to={url}
  >
    {name}
    {isLogo && (
      <IconButton
        sx={{
          color: 'primary.contrastText',
          ':hover': {
            color: 'HighlightText'
          }
        }}
      >
        <VideocamIcon />
      </IconButton>
    )}
  </Link>
);

HeaderLinkButton.defaultProps = {
  name: '',
  color: 'primary.contrastText',
  url: '/',
  isLogo: false
};

export default HeaderLinkButton;
