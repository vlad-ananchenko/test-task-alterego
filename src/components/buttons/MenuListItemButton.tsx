import { Link as RouterLink } from 'react-router-dom';
import { Link, ListItemButton } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

interface IMenuListItemButtonProps {
  url: string;
  buttonName: string;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const MenuListItemButton = ({
  url,
  buttonName,
  setOpenDrawer
}: IMenuListItemButtonProps) => (
  <Link
    underline="none"
    component={RouterLink}
    to={url}
    sx={{ color: '#000000' }}
  >
    {' '}
    <ListItemButton onClick={() => setOpenDrawer(false)}>
      {buttonName}
    </ListItemButton>
  </Link>
);

export default MenuListItemButton;
