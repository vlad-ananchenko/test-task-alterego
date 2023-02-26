import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  useMediaQuery,
  useTheme,
  Toolbar,
  AppBar,
  Stack,
  IconButton
} from '@mui/material';

import MainDrawer from 'components/drawers/MainDrawer';
import LoginButton from 'components/buttons/LoginButton';
import HeaderLinkButton from 'components/buttons/HeaderLinkButton';
import LanguageSwitchButton from 'components/buttons/LanguageSwitchButton';
import { pages } from 'utils/consts';
import { useGetUserCredentials } from 'hooks/useGetUserCredentials';

const MainHeader = () => {
  const { pathname } = useLocation();
  const location = useLocation();

  const { getUser, logOut, username } = useGetUserCredentials();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    getUser();
  }, [username]);

  const isActiveLink = (path: string) => {
    const activeLink =
      location.pathname === path ? 'HighlightText' : 'primary.contrastText';
    return activeLink;
  };

  return (
    <AppBar sx={{ bgcolor: 'secondary.dark', position: 'sticky' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <HeaderLinkButton color="gray.contrastText" isLogo />
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
              <HeaderLinkButton
                key={page.key}
                url={page.link}
                name={page.name}
                color={isActiveLink(page.link)}
              />
            ))}
            {username && (
              <HeaderLinkButton
                url="/profile"
                name="Profile"
                color={isActiveLink('/profile')}
              />
            )}
          </Stack>
        )}

        {isMatch ? (
          <MainDrawer />
        ) : (
          <Stack display="flex" direction="row" spacing={8}>
            <IconButton
              disableRipple
              sx={{
                color: 'primary.contrastText'
              }}
            >
              <LanguageSwitchButton />
            </IconButton>

            {username ? (
              <LoginButton
                color="primary.contrastText"
                logOut={logOut}
                name="Sign Out"
              />
            ) : (
              <LoginButton
                color="primary.contrastText"
                url="/auth/signin"
                name="Sign In"
              />
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
