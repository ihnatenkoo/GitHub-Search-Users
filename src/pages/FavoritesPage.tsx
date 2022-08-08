import React, { FC } from 'react';

import { useAppSelector } from '../hooks';

import UserRepos from '../components/User/UserRepos/UserRepos';
import FavoriteUsers from '../components/favorite/FavoriteUsers/FavoriteUsers';

export const FavoritesPage: FC = () => {
	const { repos, users } = useAppSelector((state) => state.user.favorites);

	return (
		<div className="flex justify-center flex-wrap">
			<FavoriteUsers users={users} />
			<UserRepos repos={repos} title="Favorite Repositories" showCount />
		</div>
	);
};
