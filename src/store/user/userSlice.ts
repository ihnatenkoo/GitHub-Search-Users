import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ActionTypes, IUserInitialState } from '../user/types/';

const initialState: IUserInitialState = {
  selectedUser: ''
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    [ActionTypes.SET_SELECTED_USER]: (state, action: PayloadAction<string>) => {
      state.selectedUser = action.payload;
    }
  }
});

const { actions, reducer } = userSlice;

export default reducer;
export const { SET_SELECTED_USER } = actions;
