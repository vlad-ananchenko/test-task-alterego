import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getUserOrErrorFromLocalStorage,
  setUserOrErrorToLocalStorage
} from 'utils/helpers/helpers';
import { IError } from 'store/models/IError';
import { IAuthCredentials } from '../models/IAuthCredentials';

export interface AuthState {
  userCredentials: IAuthCredentials;
  error: IError;
}

const initialState: AuthState = {
  userCredentials: {
    username: null,
    password: null
  },
  error: {
    message: '',
    status: null
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: ({ userCredentials }, action: PayloadAction<IAuthCredentials>) => {
      const { username, password } = action.payload;

      setUserOrErrorToLocalStorage('user', {
        username,
        password
      });

      userCredentials.username = username;
      userCredentials.password = password;
    },
    getUser: ({ userCredentials }) => {
      const { username, password } = getUserOrErrorFromLocalStorage(
        'user'
      ) as IAuthCredentials;

      userCredentials.username = username;
      userCredentials.password = password;
    },
    setUserError: ({ error }, action: PayloadAction<IError>) => {
      const { message, status } = action.payload;

      error.message = message;
      error.status = status;
    },
    logOut: ({ userCredentials }) => {
      localStorage.clear();

      userCredentials.username = null;
      userCredentials.password = null;
    }
  }
});

const { actions, reducer } = authSlice;

export const { setUser, getUser, setUserError, logOut } = actions;
export default reducer;
