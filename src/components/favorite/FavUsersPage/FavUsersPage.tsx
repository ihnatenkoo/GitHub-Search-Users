import React, { FC } from 'react';

import '../../../css/animations.css';

import { IFavUser } from '../../../types';

import FavUserCard from '../FavUserCard/FavUserCard';

interface IUserPage {
	singlePage: Array<IFavUser>;
}

const UserPage: FC<IUserPage> = ({ singlePage }) => {
	return (
		<div className="user-page grid justify-items-center sml:grid-rows-layout195px sml:grid-cols-2 gap-3 sml:gap-2 max-w-full">
			{singlePage.map((user: IFavUser) => (
				<FavUserCard user={user} key={user.login} />
			))}
		</div>
	);
};

export default UserPage;
