import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, IUserInitialState } from '../types';
import { IRepos } from '../../types/types';

const LS_FAV_KEY = 'favorite_repos';

const initialState: IUserInitialState = {
  selectedUser: '',
  favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [ActionTypes.SET_SELECTED_USER]: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    },
    [ActionTypes.ADD_FAVORITE_REPO]: (state, action: PayloadAction<IRepos>) => {
      state.favorites.push(action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    },
    [ActionTypes.REMOVE_FAVORITE_REPO]: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter((i) => i.id !== action.payload);
      localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
    }
  }
});

const { actions, reducer } = userSlice;

export default reducer;
export const { SET_SELECTED_USER, ADD_FAVORITE_REPO, REMOVE_FAVORITE_REPO } = actions;
