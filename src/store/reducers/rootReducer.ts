import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export const rootReducer = combineReducers({
  authReducer
});
