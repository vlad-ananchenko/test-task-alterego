import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';

import { pages } from 'utils/consts';
import { authSlice } from 'store/reducers/authSlice';

const MainDrawer = () => {
  const dispatch = useAppDispatch();
  const { logOut } = authSlice.actions;

  const { userCredentials } = useAppSelector(state => state.authReducer);
  const { username } = userCredentials;

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map(page => (
            <ListItemButton onClick={() => setOpenDrawer(false)} key={page.key}>
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          {username ? (
            <ListItemButton>
              <Link component={RouterLink} to="/" onClick={handleLogOut}>
                Sign Out
              </Link>
            </ListItemButton>
          ) : (
            <ListItemButton>
              <Link component={RouterLink} to="/auth/signin">
                Sign In
              </Link>
            </ListItemButton>
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
