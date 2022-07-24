import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useDebounce } from '../../hooks/debounce.hook';
import { SET_SELECTED_USER } from '../../store/github/github.slice';
import { useSearchUsersQuery } from '../../store/github/github.api';

const SearchPanel: FC = () => {
  const [search, setSearch] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const debounced = useDebounce(search);
  const dispatch = useAppDispatch();

  const {
    data: users,
    isFetching,
    isError
  } = useSearchUsersQuery(search, {
    skip: debounced.length < 3 || search === ''
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
          className="w-[25px] h-[25px] absolute z-10 top-2.5 right-3  text-gray-500 cursor-pointer animate-in"
        >
          <span className="material-icons-outlined ">close</span>
        </button>
      )}
      <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll z-10">
        {showDropdown &&
          users?.map((user) => (
            <li
              className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
              key={user.id}
              onClick={() => getUserInfo(user.login)}
            >
              {user.login}
            </li>
          ))}
      </ul>

      <div className="text-center py-2 absolute top-[5px] right-[10px]">
        {isFetching && !isError && <p className="mr-10 ">Loading...</p>}
        {isError && !isFetching && <h2 className="mr-10 text-red-600 ">Something went wrong...</h2>}
      </div>
    </div>
  );
};
export default SearchPanel;
