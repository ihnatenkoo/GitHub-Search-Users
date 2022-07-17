import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserReducerState } from '../store/types';

export interface InitialStateProps {
  userReducer: IUserReducerState;
}

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
