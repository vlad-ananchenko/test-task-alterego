import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import newsItemReducer from './newsItemSlice';

export const rootReducer = combineReducers({
  authReducer,
  newsItemReducer
});
