import { MouseEventHandler } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

interface ILoginButton {
  color?: string;
  value?: string;
  logOut?: MouseEventHandler<HTMLAnchorElement>;
}

// test
const LoginButton = ({ color, value, logOut }: ILoginButton) => (
  <Link
    underline="none"
    component={RouterLink}
    to="/auth/signin"
    onClick={logOut}
    sx={{
      color,
      ':hover': {
        color: 'success.main'
      }
    }}
  >
    {value}
  </Link>
);

export default LoginButton;

LoginButton.defaultProps = {
  color: '',
  value: '',
  logOut: null
};
