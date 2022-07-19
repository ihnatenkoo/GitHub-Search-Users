import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { IUserInitialState } from '../store/user/types';

export interface InitialStateProps {
  user: IUserInitialState;
}

export const useAppSelector: TypedUseSelectorHook<InitialStateProps> = useSelector;
