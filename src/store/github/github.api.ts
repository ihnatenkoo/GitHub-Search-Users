import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ServerResponse } from '../../types/types';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  endpoints: (build) => ({
    searchUsers: build.query<ServerResponse<IUser>, string>({
      query: (search: string) => ({
        url: '/search/users',
        params: {
          q: search
        }
      })
    })
  })
});

export const { useSearchUsersQuery } = githubApi;
