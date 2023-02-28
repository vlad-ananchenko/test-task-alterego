import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Stack, Typography, TextField, AlertColor } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import Notification from 'components/notifications/Notification';
import { loginSchema } from 'utils/validation/auth';
import { useAppDispatch, useAppSelector } from 'store/hooks/hooks';
import { setUser } from 'store/reducers/authSlice';
import { useTranslation } from 'react-i18next';

export interface ILoginFormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { t } = useTranslation();
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
  }, [error, showErrorMessage]);

  // I know that async doesn't need to be used here but it's looks more readable and natural for me
  const handleSubmitForm = async (values: ILoginFormValues) => {
    const { username, password } = values;

    dispatch(
      setUser({
        username,
        password
      })
    );

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
              {t('authPage.title')}
            </Typography>
            <Field
              fullWidth
              name="username"
              label={t('authPage.placeholderUsername')}
              as={TextField}
              error={errors.username && touched.username}
              helperText={touched.username && errors.username}
            />
            <Field
              fullWidth
              name="password"
              label={t('authPage.placeholderPassword')}
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
            >
              {t('authPage.logInButton')}
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
