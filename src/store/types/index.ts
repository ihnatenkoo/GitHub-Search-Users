import { IRepos } from '../../types/types';

export interface IUserInitialState {
  selectedUser: string;
  favorites: Array<IRepos>;
}

export enum ActionTypes {
  SET_SELECTED_USER = 'SET_SELECTED_USER',
  ADD_FAVORITE_REPO = 'ADD_FAVORITE_REPO',
  REMOVE_FAVORITE_REPO = 'REMOVE_FAVORITE_REPO'
}
