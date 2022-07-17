import { ActionTypes, IUserReducerState, setSelectedUserAction } from '../types';

const initialState = {
  selectedUser: ''
};

export const userReducer = (
  state: IUserReducerState = initialState,
  action: setSelectedUserAction
) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };

    default:
      return state;
  }
};
