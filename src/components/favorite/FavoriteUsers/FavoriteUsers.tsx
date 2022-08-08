import React, { FC, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { IFavUser } from '../../../types';

import { paginate } from '../../../utils';

import Pagination from '../../ui/Pagination/Pagination';
import FavUserPage from '../FavUsersPage/FavUsersPage';

import './FavoriteUsers.css';

interface IFavUsers {
	users: Array<IFavUser>;
}

const FavoriteUsers: FC<IFavUsers> = ({ users }) => {
	const [pageIndex, setPageIndex] = useState<number>(1);
	const [usersPagesArr, setUsersPagesArr] = useState<IFavUser[][]>([]);
	const [switchPageHandler, setSwitchPageHandler] = useState<boolean>(false);

	const singlePage = usersPagesArr[pageIndex - 1] ?? [];

	useEffect(() => {
		setUsersPagesArr(paginate(users));
	}, [pageIndex, users]);

	return (
		<div className="mb-5 sml:mr-10 w-[450px] max-w-full">
			<h3 className="text-center sml:text-left mb-2 sml:mb-3 font-bold text-gray-600 text-lg">
				Favorite Users ({users.length})
			</h3>
			{users.length === 0 && (
				<p className="font-medium text-red-300 text-center sml:text-left">
					Users list is empty
				</p>
			)}

			<CSSTransition in={switchPageHandler} timeout={300}>
				<FavUserPage singlePage={singlePage} />
			</CSSTransition>

			<Pagination
				pageIndex={pageIndex}
				setPageIndex={setPageIndex}
				usersPagesArr={usersPagesArr}
				setSwitchPageHandler={setSwitchPageHandler}
				singlePage={singlePage}
			/>
		</div>
	);
};

export default FavoriteUsers;
