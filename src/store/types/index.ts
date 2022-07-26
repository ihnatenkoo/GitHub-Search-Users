import { IFavUser, IRepos } from '../../types';
interface IFavorites {
	repos: Array<IRepos>;
	users: Array<IFavUser>;
}
export interface IUserInitialState {
	selectedUser: string;
	favorites: IFavorites;
}

export enum ActionTypes {
	SET_SELECTED_USER = 'SET_SELECTED_USER',
	ADD_FAVORITE_USER = 'ADD_FAVORITE_USER',
	REMOVE_FAVORITE_USER = 'REMOVE_FAVORITE_USER',
	ADD_FAVORITE_REPO = 'ADD_FAVORITE_REPO',
	REMOVE_FAVORITE_REPO = 'REMOVE_FAVORITE_REPO',
}
