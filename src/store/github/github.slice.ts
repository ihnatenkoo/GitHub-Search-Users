import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, IUserInitialState } from '../types';
import { IFavUser, IRepos } from '../../types/types';

const LS_FAV_REPOS_KEY = 'favorite_repos';
const LS_FAV_USERS_KEY = 'favorite_users';

const initialState: IUserInitialState = {
  selectedUser: '',
  favorites: {
    repos: JSON.parse(localStorage.getItem(LS_FAV_REPOS_KEY) ?? '[]'),
    users: JSON.parse(localStorage.getItem(LS_FAV_USERS_KEY) ?? '[]')
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [ActionTypes.SET_SELECTED_USER]: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
    [ActionTypes.ADD_FAVORITE_USER]: (state, action: PayloadAction<IFavUser>) => {
      state.favorites.users.push(action.payload);
      localStorage.setItem(LS_FAV_USERS_KEY, JSON.stringify(state.favorites.users));
    },
    [ActionTypes.REMOVE_FAVORITE_USER]: (state, action: PayloadAction<string>) => {
      state.favorites.users = state.favorites.users.filter(
        (i: IFavUser) => i.login !== action.payload
      );
      localStorage.setItem(LS_FAV_USERS_KEY, JSON.stringify(state.favorites.users));
    },
    [ActionTypes.ADD_FAVORITE_REPO]: (state, action: PayloadAction<IRepos>) => {
      state.favorites.repos.push(action.payload);
      localStorage.setItem(LS_FAV_REPOS_KEY, JSON.stringify(state.favorites.repos));
    },
    [ActionTypes.REMOVE_FAVORITE_REPO]: (state, action: PayloadAction<number>) => {
      state.favorites.repos = state.favorites.repos.filter((i) => i.id !== action.payload);
      localStorage.setItem(LS_FAV_REPOS_KEY, JSON.stringify(state.favorites.repos));
    }
  }
});

const { actions, reducer } = userSlice;

export default reducer;
export const {
  SET_SELECTED_USER,
  ADD_FAVORITE_REPO,
  REMOVE_FAVORITE_REPO,
  ADD_FAVORITE_USER,
  REMOVE_FAVORITE_USER
} = actions;
