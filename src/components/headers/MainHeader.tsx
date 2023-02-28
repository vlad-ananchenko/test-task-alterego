import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery, useTheme, Toolbar, AppBar, Stack } from '@mui/material';

import MainDrawer from 'components/drawers/MainDrawer';
import LoginButton from 'components/buttons/LoginButton';
import HeaderLinkButton from 'components/buttons/HeaderLinkButton';
import LanguageToggleButton from 'components/buttons/LanguageToggleButton';

import { pages } from 'utils/consts';
import { useGetUserCredentials } from 'hooks/useGetUserCredentials';
import { useTranslation } from 'react-i18next';

const MainHeader = () => {
  const location = useLocation();

  const { t } = useTranslation();

  const { getUser, logOut, username } = useGetUserCredentials();

  const routes = pages();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    getUser();
  }, [username]);

  const isActiveLink = (path: string) => {
    const activeLink =
      location.pathname === path ? '#000000' : 'primary.contrastText';
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

        <Stack
          direction="row"
          spacing={12}
          sx={{
            display: {
              xs: 'none',
              md: 'flex'
            }
          }}
        >
          {routes.map(page => (
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
              name={t('header.profile')}
              color={isActiveLink('/profile')}
            />
          )}
        </Stack>

        {isMatch ? (
          <MainDrawer />
        ) : (
          <Stack display="flex" direction="row" spacing={8}>
            <LanguageToggleButton />

            {username ? (
              <LoginButton
                color="primary.contrastText"
                logOut={logOut}
                name={t('header.signOut')}
              />
            ) : (
              <LoginButton
                color="primary.contrastText"
                url="/auth/signin"
                name={t('header.signIn')}
              />
            )}
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
