import { Dispatch } from 'react';
import { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';

import { IError } from 'store/models/IError';
import { IAuthCredentials } from 'store/models/IAuthCredentials';
import { authSlice } from 'store/reducers/authSlice';
import { users } from 'mockup/database/users';
import { errorObject } from 'utils/consts';
import { findUserByUsernameAndPassword } from '../helpers';

export interface IAction<T = IAuthCredentials | IError> {
  type: 'auth/setUser';
  payload: T;
}

const validationUserCredentials: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch<IAction>) =>
  (action: IAction) => {
    if (action.type !== 'auth/setUser') {
      return next(action);
    }
    const { setUser, setUserError } = authSlice.actions;
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

export default validationUserCredentials;
