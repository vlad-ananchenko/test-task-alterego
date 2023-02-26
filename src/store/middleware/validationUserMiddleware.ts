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
