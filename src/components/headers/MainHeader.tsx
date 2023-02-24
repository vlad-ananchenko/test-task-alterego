import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
  useMediaQuery,
  useTheme,
  Toolbar,
  IconButton,
  AppBar,
  Link,
  Stack
} from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';

import MainDrawer from 'components/drawers/MainDrawer';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { authSlice } from 'store/reducers/authSlice';
import { pages } from 'utils/consts';
import { useEffect } from 'react';

const MainHeader = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const { userCredentials } = useAppSelector(state => state.authReducer);
  const { username } = userCredentials;
  const { getUser } = authSlice.actions;

  const { logOut } = authSlice.actions;

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogOut = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(getUser());
  }, [username]);

  return (
    <AppBar sx={{ bgcolor: 'secondary.dark', position: 'sticky' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Link
          underline="none"
          sx={{
            color: 'gray.contrastText',
            pl: 0
          }}
          component={RouterLink}
          to="/"
        >
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
        </Link>
        {!pathname.includes('auth') && (
          <Stack
            direction="row"
            spacing={8}
            sx={{
              display: {
                xs: 'none',
                md: 'flex'
              }
            }}
          >
            {pages.map(page => (
              <Link
                component={RouterLink}
                key={page.key}
                to={page.link}
                sx={{
                  color: 'primary.contrastText'
                }}
              >
                {page.name}
              </Link>
            ))}
            {pathname !== '/profile' && (
              <Link
                component={RouterLink}
                to="/profile"
                sx={{
                  color: 'primary.contrastText'
                }}
              >
                Profile
              </Link>
            )}
          </Stack>
        )}

        {isMatch ? (
          <MainDrawer />
        ) : (
          <Stack direction="row" spacing={8}>
            {username ? (
              <Link
                component={RouterLink}
                to="/"
                onClick={handleLogOut}
                sx={{
                  color: 'primary.contrastText'
                }}
              >
                Sign Out
              </Link>
            ) : (
              <Link
                component={RouterLink}
                to="/auth/signin"
                sx={{
                  color: 'primary.contrastText'
                }}
              >
                Sign In
              </Link>
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
