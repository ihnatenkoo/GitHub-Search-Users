import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import user from './user/userSlice';

export const store = configureStore({
  reducer: { [githubApi.reducerPath]: githubApi.reducer, user },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});
