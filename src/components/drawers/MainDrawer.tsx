import { useEffect, useState } from 'react';
import { Drawer, IconButton, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { pages } from 'utils/consts';
import { useGetUserCredentials } from 'hooks/useGetUserCredentials';
import LoginButton from 'components/buttons/LoginButton';
import MenuListItemButton from 'components/buttons/MenuListItemButton';

const MainDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { getUser, logOut, username } = useGetUserCredentials();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map(page => (
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
              buttonName="Profile"
              setOpenDrawer={setOpenDrawer}
            />
          )}
          {username ? (
            <LoginButton
              color="secondary.dark"
              logOut={logOut}
              name="Sign Out"
            />
          ) : (
            <LoginButton
              color="secondary.main"
              name="Sign In"
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
