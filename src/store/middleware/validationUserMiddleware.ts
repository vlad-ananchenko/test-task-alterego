import { Dispatch } from 'react';
import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

import { IError } from 'store/models/IError';
import { IAuthCredentials } from 'store/models/IAuthCredentials';
import { setUser, setUserError } from 'store/reducers/authSlice';
import { users } from 'mockup/database/users';
import { errorObject } from 'utils/consts';
import { findUserByUsernameAndPassword } from '../helpers';

export interface IAuthAction<T = IAuthCredentials | IError> {
  type: 'auth/setUser' | 'auth/setUserError';
  payload: T;
}

// I used the logic of the middleware not exactly according to its purpose,
// but here the work with the server is simulated,
// since in the requirements it was not allowed to use a real server or JSON server.
const validationUserMiddleware: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch<IAuthAction>) =>
  (action: IAuthAction) => {
    if (action.type !== 'auth/setUser') {
      return next(action);
    }

    const { username, password } = action.payload as IAuthCredentials;

    const foundUserByCredentials = findUserByUsernameAndPassword(users, {
      username,
      password
    });

    const nonExistentUser =
      !foundUserByCredentials?.username && !foundUserByCredentials?.password;

    if (nonExistentUser) {
      dispatch(setUserError(errorObject));
    } else {
      next(
        setUser({
          username,
          password
        })
      );
    }

    return null;
  };

export default validationUserMiddleware;
