import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Stack, Typography, TextField, AlertColor } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Notification from 'components/notifications/Notification';
import { loginSchema } from 'utils/validation/auth';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { setUser } from 'store/reducers/authSlice';

export interface ILoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const [openNotification, setOpenNotification] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<AlertColor>('error');

  const dispatch = useAppDispatch();
  const { error } = useAppSelector(state => state.authReducer);
  const { message, status } = error;

  const initialValues = {
    username: '',
    password: ''
  };

  useEffect(() => {
    if (message && status) {
      setOpenNotification(true);
      setNotificationType('error');
      setNotificationMessage(message);
    }
  }, [message, status, showErrorMessage]);

  // I know that async doesn't need to be used here but it's looks more readable and natural for me
  const handleSubmitForm = async (values: ILoginFormValues) => {
    const { username, password } = values;

    if (username && password) {
      dispatch(
        setUser({
          username,
          password
        })
      );
    }
  };

  const handleChangeError = () => {
    if (message && status) {
      setShowErrorMessage(prev => !prev);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmitForm}
    >
      {({ errors, touched, dirty }) => (
        <Form>
          <Stack direction="column" spacing={4}>
            <Typography align="center" variant="h4" component="h1">
              Log In to your account
            </Typography>
            <Field
              fullWidth
              name="username"
              label="Username"
              as={TextField}
              error={errors.username && touched.username}
              helperText={touched.username && errors.username}
            />
            <Field
              fullWidth
              name="password"
              label="Password"
              as={TextField}
              error={errors.password && touched.password}
              helperText={touched.password && errors.password}
            />
            <LoadingButton
              color="secondary"
              sx={{ color: 'primary.contrastText' }}
              variant="contained"
              type="submit"
              disabled={!dirty}
              fullWidth
              onClick={handleChangeError}
            >
              Log In
            </LoadingButton>
          </Stack>
          <Notification
            open={openNotification}
            setOpen={setOpenNotification}
            type={notificationType}
            message={notificationMessage}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
