import { FC, useEffect, useState } from 'react';
import { SET_SELECTED_USER } from '../../store/github/github.slice';
import { useSearchUsersQuery } from '../../store/github/github.api';
import { useAppDispatch, useDebounce } from '../../hooks';
import SearchDropdown from './SearchDropdown/SearchDropdown';
import Scroll from '../ui/Scroll/Scroll';

const SearchPanel: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const debounced = useDebounce(search);
  const dispatch = useAppDispatch();

  const {
    data: users,
    isFetching,
    isError,
  } = useSearchUsersQuery(search, {
    skip: debounced.length < 3 || search === '',
  });

  const getUserInfo = (username: string) => {
    setShowDropdown(false);
    setSearch('');
    dispatch(SET_SELECTED_USER(username));
  };

  const clearInputHandler = () => {
    setShowDropdown(false);
    setSearch('');
  };

  useEffect(() => {
    if (users && users.length > 0 && debounced.length >= 3) setShowDropdown(true);
  }, [debounced, users]);

  return (
    <div className="mx-auto mb-5 relative w-[560px] max-w-full">
      <input
        type="text"
        className="border py-2 px-4 w-full h-[42px] rounded-md"
        placeholder="Search for Github username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button
          onClick={clearInputHandler}
          className="w-[25px] h-[25px] absolute z-10 top-2.5 right-3 text-gray-500 cursor-pointer animate-in"
        >
          <span className="material-icons-outlined ">close</span>
        </button>
      )}

      <div className="absolute top-[42px] left-0 right-0 shadow-md bg-white z-10 rounded-md">
        {showDropdown && users && (
          <Scroll>
            <SearchDropdown users={users} getUserInfo={getUserInfo}></SearchDropdown>
          </Scroll>
        )}
      </div>

      <div className="text-center py-2 absolute top-[5px] right-[10px]">
        {isFetching && !isError && <p className="mr-10 text-gray-500">Loading...</p>}
        {isError && !isFetching && <p className="mr-10 text-red-600 ">Something went wrong...</p>}
        {search.length > 3 && users?.length === 0 && (
          <p className="mr-10 text-gray-500">User not found</p>
        )}
      </div>
    </div>
  );
};
export default SearchPanel;
