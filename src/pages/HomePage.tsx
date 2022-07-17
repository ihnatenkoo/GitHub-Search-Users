import { useState } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const { data, isLoading, isError } = useSearchUsersQuery('ihn');
  return (
    <div className="flex justify-center mt-10 mx-auto h-screen w-screen">
      {isLoading && <h2 className="text-center text-red-600">Something went wrong...</h2>}

      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Search for Github username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde iusto, officia
          distinctio nemo eveniet ea adipisci dolor laborum placeat excepturi molestias accusantium
          sint ipsam corporis tempora quam harum sunt.
        </div>
      </div>
    </div>
  );
};
export default HomePage;
