import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from './github/github.api';
import user from './github/github.slice';

export const store = configureStore({
  reducer: { [githubApi.reducerPath]: githubApi.reducer, user },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
