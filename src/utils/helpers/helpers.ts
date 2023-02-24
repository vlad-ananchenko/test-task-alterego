import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

import { IAuthCredentials } from 'store/models/IAuthCredentials';
import { IError } from 'store/models/IError';

export interface ApiErrorResponse {
  status: number;
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
}

export const isApiResponseError = (
  errorType?: FetchBaseQueryError | SerializedError | ApiErrorResponse
): errorType is ApiErrorResponse =>
  typeof errorType === 'object' &&
  errorType != null &&
  'status' in errorType &&
  typeof (errorType as any).status === 'number';

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
