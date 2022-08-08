import React, { FC, useEffect, useState } from 'react';

import { useAppDispatch, useDebounce, useOutsideClick } from '../../hooks';

import { useSearchUsersQuery } from '../../store/github/github.api';
import { SET_SELECTED_USER } from '../../store/github/github.slice';

import Scroll from '../ui/Scroll/Scroll';
import SearchSpinner from '../ui/SearchSpinner/SearchSpinner';

import SearchDropdown from './SearchDropdown/SearchDropdown';

const SearchPanel: FC = () => {
	const [search, setSearch] = useState<string>('');
	const {
		ref,
		isShow: showDropdown,
		setIsShow: setShowDropdown,
	} = useOutsideClick(false);

	const debounced = useDebounce(search);
	const dispatch = useAppDispatch();

	const {
		data: users,
		isFetching,
		isError,
	} = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3 || search === '',
	});

	const getUserInfo = (username: string) => {
		clearSearchQuery();
		dispatch(SET_SELECTED_USER(username));
	};

	const clearSearchQuery = () => {
		setShowDropdown(false);
		setSearch('');
	};

	useEffect(() => {
		if (users && users.length > 0 && search.length >= 3) setShowDropdown(true);
	}, [search, users, setShowDropdown]);

	return (
		<div className="mx-auto mb-5 relative w-[560px] max-w-full">
			<input
				type="text"
				className="border py-2 px-4 w-full h-[42px] rounded-md"
				placeholder="Search for Github username..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>

			<div className="w-[25px] h-[25px] absolute z-10 top-2.5 right-3 text-gray-500 cursor-pointer">
				{search && !isFetching && (
					<button onClick={clearSearchQuery}>
						<span className="material-icons-outlined">close</span>
					</button>
				)}
				{isFetching && <SearchSpinner />}
			</div>

			<div
				ref={ref}
				className="absolute top-[42px] left-0 right-0 shadow-md bg-white z-10 rounded-md"
			>
				{showDropdown && users && (
					<Scroll>
						<SearchDropdown users={users} getUserInfo={getUserInfo} />
					</Scroll>
				)}
			</div>

			<div className="text-center py-2 absolute top-[5px] right-[10px]">
				{isError && !isFetching && (
					<span className="mr-10 text-red-600 animate-in">
						Something went wrong...
					</span>
				)}
				{users?.length === 0 && search.length >= 3 && !isError && (
					<span className="mr-10 text-gray-500 animate-in">User not found</span>
				)}
				{search.length > 0 && search.length < 3 && (
					<span className="mr-10 text-gray-500 animate-in">
						Enter {3 - search.length} more characters
					</span>
				)}
			</div>
		</div>
	);
};

export default SearchPanel;
