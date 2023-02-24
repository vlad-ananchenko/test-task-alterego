import { SyntheticEvent } from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert, AlertColor } from '@mui/material';

export interface NotificationProps {
  open: boolean;
  setOpen: Function;
  type: AlertColor;
  message: string;
}

const Notification = ({ open, setOpen, message, type }: NotificationProps) => {
  function handleCloseNotification(
    event?: SyntheticEvent | Event,
    reason?: string
  ) {
    if (reason === 'clickaway') return;
    setOpen(false);
  }

  return (
    <Snackbar
      autoHideDuration={5000}
      open={open}
      onClose={handleCloseNotification}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
    >
      <Alert variant="filled" onClose={handleCloseNotification} severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
