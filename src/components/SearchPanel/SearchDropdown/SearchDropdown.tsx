import React, { FC } from 'react';

import { IUsers } from '../../../types';

interface ISearchDropdown {
	users: Array<IUsers>;
	getUserInfo: (username: string) => void;
}

const SearchDropdown: FC<ISearchDropdown> = ({ users, getUserInfo }) => {
	return (
		<ul className="list-none max-h-[200px]">
			{users.map((user) => (
				<li
					className="py-3.5 sml:py-2  px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
					key={user.id}
					onClick={() => getUserInfo(user.login)}
				>
					{user.login}
				</li>
			))}
		</ul>
	);
};

export default SearchDropdown;
