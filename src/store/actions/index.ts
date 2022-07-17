import { ActionTypes } from '../types';

export const setSelectedUser = (username: string) => {
  return {
    type: ActionTypes.SET_SELECTED_USER,
    payload: username
  };
};
