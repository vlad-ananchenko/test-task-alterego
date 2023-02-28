import { useEffect, useState } from 'react';
import { Drawer, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { pages } from 'utils/consts';
import { useGetUserCredentials } from 'hooks/useGetUserCredentials';
import LoginButton from 'components/buttons/LoginButton';
import MenuListItemButton from 'components/buttons/MenuListItemButton';
import { useTranslation } from 'react-i18next';

const MainDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { getUser, logOut, username } = useGetUserCredentials();

  const { t } = useTranslation();

  const routes = pages();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {routes.map(page => (
            <MenuListItemButton
              key={page.key}
              url={page.link}
              buttonName={page.name}
              setOpenDrawer={setOpenDrawer}
            />
          ))}
          {username && (
            <MenuListItemButton
              url="/profile"
              buttonName={t('header.profile')}
              setOpenDrawer={setOpenDrawer}
            />
          )}
          {username ? (
            <LoginButton
              color="secondary.dark"
              logOut={logOut}
              name={t('header.signOut')}
            />
          ) : (
            <LoginButton
              color="secondary.main"
              name={t('header.signIn')}
              url="/auth/signin"
            />
          )}
        </List>
      </Drawer>

      <IconButton
        sx={{ color: 'white', ml: 'auto' }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default MainDrawer;
