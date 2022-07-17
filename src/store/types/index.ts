export interface IUserReducerState {
  selectedUser: string;
}

export enum ActionTypes {
  SET_SELECTED_USER = 'SET_SELECTED_USER'
}

export interface setSelectedUserAction {
  type: ActionTypes.SET_SELECTED_USER;
  payload: string;
}
