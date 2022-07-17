import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import { userReducer } from './reducer';

export const store = configureStore({
  reducer: combineReducers({ [githubApi.reducerPath]: githubApi.reducer, userReducer }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});
