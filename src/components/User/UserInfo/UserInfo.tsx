import React, { FC, useState } from 'react';

import { IFavUser, ISingleUser } from '../../../types';

import { checkTextValue } from '../../../utils';

import { customToasts } from '../../../utils/toasts';

import {
	ADD_FAVORITE_USER,
	REMOVE_FAVORITE_USER,
} from '../../../store/github/github.slice';

import { useAppDispatch, useAppSelector } from '../../../hooks/';

interface IUserInfoProps {
	user: ISingleUser;
	error: boolean;
}

const UserInfo: FC<IUserInfoProps> = ({ user, error }) => {
	const favUsers = useAppSelector((state) => state.user.favorites.users);
	const dispatch = useAppDispatch();

	const {
		login,
		avatar_url,
		bio,
		location,
		name,
		public_repos,
		blog,
		html_url,
		followers,
		following,
	} = user;

	const [isFav, setIsFav] = useState<boolean>(
		favUsers.some((i: IFavUser) => i.login === login)
	);

	const favUserData: IFavUser = {
		login,
		name,
		avatar_url,
		public_repos,
		followers,
		following,
		html_url,
	};

	const favClickHandler = (login: string) => {
		isFav ? customToasts('remove', login) : customToasts('add', login);
		isFav
			? dispatch(REMOVE_FAVORITE_USER(login))
			: dispatch(ADD_FAVORITE_USER(favUserData));
		setIsFav((prev) => !prev);
	};

	if (error)
		return (
			<p className="mr-10 font-medium text-red-400">Error user loading...</p>
		);

	return (
		<div className="w-[550px] max-w-full mb-5">
			<h3 className="font-bold text-gray-600 mb-2 text-lg text-center sml:text-left">
				User Information
			</h3>
			<div className="flex flex-wrap justify-center sml:justify-start">
				<div className="mr-3 mb-2 sml:mb-0 relative w-[220px] h-[220px]">
					<img
						src={avatar_url}
						alt={`${name} avatar`}
						className="max-w-full w-full h-auto rounded-md"
					/>
					<button
						onClick={() => favClickHandler(login)}
						className="absolute top-2 left-2 text-red-500 cursor-pointer background-gray-opacity05 rounded-full select-none w-[40px] h-[40px]"
					>
						<span className="material-icons-outlined text-3xl p-1.5 position-absolute-center">
							{isFav ? 'favorite' : 'favorite_border'}
						</span>
					</button>
				</div>
				<ul className="text-gray-600 font-bold max-w-[220px] sml:max-w-[300px] break-words">
					<li className="mb-2">
						Login: <span className="font-normal text-gray-500">{login}</span>
					</li>
					<li className="mb-2">
						Name:{' '}
						<span className="font-normal text-gray-500">
							{checkTextValue(name)}
						</span>
					</li>
					<li className="mb-2 leading-5">
						Bio:{' '}
						<span className="font-normal text-gray-500">
							{checkTextValue(bio, 145)}
						</span>
					</li>
					<li className="mb-2">
						Location:{' '}
						<span className="font-normal text-gray-500">
							{checkTextValue(location)}
						</span>
					</li>
					<li className="mb-2">
						Repositories:{' '}
						<span className="font-normal text-gray-500">{public_repos}</span>
					</li>
					<li className="mb-2">
						Blog:
						{blog ? (
							<a
								href={blog}
								target="_blank"
								rel="noreferrer"
								className="text-sm font-medium text-blue-500 mt-1 block"
							>
								{blog}
							</a>
						) : (
							<span className="font-normal text-gray-500"> No info</span>
						)}
					</li>
					<li>
						GitHub:{' '}
						<a
							href={html_url}
							target="_blank"
							rel="noreferrer"
							className="text-sm font-medium text-blue-500 mt-1 block"
						>
							{html_url}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default UserInfo;
