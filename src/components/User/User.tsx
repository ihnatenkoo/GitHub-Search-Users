import React, { useEffect } from 'react';

import { useAppSelector } from '../../hooks';

import {
	useLazyGetUserInfoQuery,
	useLazyGetUserReposQuery,
} from '../../store/github/github.api';

import { Spinner } from '../ui/Spinner/Spinner';

import UserInfo from './UserInfo/UserInfo';
import Repositories from './UserRepos/UserRepos';

const User = () => {
	const { selectedUser } = useAppSelector((state) => state.user);
	const [
		fetchUser,
		{ data: user, isFetching: isUserFetching, isError: isUserError },
	] = useLazyGetUserInfoQuery();
	const [
		fetchUserRepos,
		{ data: repos, isFetching: isRepoFetching, isError: isReposError },
	] = useLazyGetUserReposQuery();

	useEffect(() => {
		if (selectedUser) {
			fetchUser(selectedUser);
			fetchUserRepos(selectedUser);
		}
	}, [selectedUser, fetchUser, fetchUserRepos]);

	if (isUserFetching || isRepoFetching) {
		return <Spinner />;
	}

	return (
		<div className="flex justify-center flex-wrap max-w-full">
			{user && (
				<>
					<UserInfo user={user} error={isUserError} />
					<Repositories
						repos={repos}
						error={isReposError}
						title="Repositories"
					/>
				</>
			)}
		</div>
	);
};

export default User;
