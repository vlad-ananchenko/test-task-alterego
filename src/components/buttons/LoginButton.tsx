import { MouseEventHandler } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link, ListItemButton } from '@mui/material';

interface ILoginButton {
  color?: string;
  name?: string;
  url?: string;
  logOut?: MouseEventHandler<HTMLAnchorElement>;
}

const LoginButton = ({ color, name, url, logOut }: ILoginButton) => (
  <Link
    sx={{ color }}
    underline="none"
    component={RouterLink}
    to={url || '/'}
    onClick={logOut}
  >
    <ListItemButton>{name}</ListItemButton>
  </Link>
);

export default LoginButton;

LoginButton.defaultProps = {
  color: '',
  name: '',
  url: '',
  logOut: null
};
