import * as yup from 'yup';

export const loginSchema = yup.object({
  username: yup
    .string()
    .min(3, 'Your username must be at least 3 characters long')
    .required('Username is a required field'),
  password: yup
    .string()
    .min(5, 'The minimum password length is 5 characters')
    .required('Password is a required field')
});
