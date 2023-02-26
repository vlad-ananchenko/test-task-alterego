import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import validationUserMiddleware from './middleware/validationUserMiddleware';

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({}).concat(logger).concat(validationUserMiddleware)
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
