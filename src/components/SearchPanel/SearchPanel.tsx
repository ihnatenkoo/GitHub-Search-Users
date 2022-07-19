import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { useDebounce } from '../../hooks/debounce.hook';
import { SET_SELECTED_USER } from '../../store/user/userSlice';
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
    skip: debounced.length <= 3
  });

  const getUserInfo = (username: string) => {
    setShowDropdown(false);
    dispatch(SET_SELECTED_USER(username));
  };

  useEffect(() => {
    if (users && users.length > 0) setShowDropdown(debounced.length > 3);
  }, [debounced, users]);

  return (
    <div className="mb-8">
      <input
        type="text"
        className="border py-2 px-4 w-full h-[42px]"
        placeholder="Search for Github username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
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

      <div className="text-center py-2">
        {isFetching && <p>Loading...</p>}
        {isError && <h2 className="text-red-600 ">Something went wrong...</h2>}
      </div>
    </div>
  );
};
export default SearchPanel;
