import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepos, ISingleUser, IUsers, ServerResponse } from '../../types/types';

export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com'
  }),
  endpoints: (build) => ({
    searchUsers: build.query<Array<IUsers>, string>({
      query: (search: string) => ({
        url: '/search/users',
        params: {
          q: search,
          per_page: 10
        }
      }),
      transformResponse: (response: ServerResponse<IUsers>) => response.items
    }),
    getUserInfo: build.query<ISingleUser, string>({
      query: (username: string) => ({
        url: `/users/${username}`
      })
    }),
    getUserRepos: build.query<Array<IRepos>, string>({
      query: (username: string) => ({
        url: `/users/${username}/repos`
      })
    })
  })
});

export const { useSearchUsersQuery, useLazyGetUserInfoQuery, useLazyGetUserReposQuery } = githubApi;
