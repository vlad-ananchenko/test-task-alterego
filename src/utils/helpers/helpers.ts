import { IAuthCredentials } from 'store/models/IAuthCredentials';
import { IError } from 'store/models/IError';

export const getUserOrErrorFromLocalStorage = (
  value: 'user' | 'error'
): IAuthCredentials | IError => {
  if (value === 'user') {
    return localStorage.getItem(value)
      ? JSON.parse(localStorage.getItem(value) as string)
      : { username: null, password: null };
  }
  return localStorage.getItem(value)
    ? JSON.parse(localStorage.getItem(value) as string)
    : { message: null, status: null };
};

export const setUserOrErrorToLocalStorage = (
  value: 'user' | 'error',
  data: IAuthCredentials | IError
) => {
  if (value === 'user') {
    const { username, password } = data as IAuthCredentials;

    localStorage.setItem(
      value,
      JSON.stringify({
        username,
        password
      })
    );
    localStorage.removeItem('error');
  } else {
    const { message, status } = data as IError;

    localStorage.setItem(
      value,
      JSON.stringify({
        message,
        status
      })
    );
  }
};

export const capitalized = (phrase: string) =>
  phrase.charAt(0).toUpperCase() + phrase.slice(1);
