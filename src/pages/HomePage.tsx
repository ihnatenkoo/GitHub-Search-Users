import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce.hook';
import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [showUsers, setShowUsers] = useState(false);
  const debounced = useDebounce(search);
  const {
    data: users,
    isFetching,
    isError
  } = useSearchUsersQuery(search, {
    skip: debounced.length <= 3
  });

  useEffect(() => {
    setShowUsers(debounced.length > 3 && users?.length! > 0);
  }, [debounced, users]);

  return (
    <div className="flex justify-center mt-10 mx-auto h-screen w-screen">
      {isError && <h2 className="text-center text-red-600">Something went wrong...</h2>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white overflow-y-scroll">
          {isFetching && <p className="text-center">Loading...</p>}
          {showUsers &&
            users?.map((user) => (
              <li
                className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
                key={user.id}
              >
                {user.login}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default HomePage;
