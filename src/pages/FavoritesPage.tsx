import { FC } from 'react';
import ReposList from '../components/ReposList/ReposList';
import { useAppSelector } from '../hooks';

const FavoritesPage: FC = () => {
  const { favorites } = useAppSelector((state) => state.user);

  return (
    <div className="mx-auto w-[550px] max-w-full">
      <h3 className="font-bold text-gray-600 mb-3 text-lg">Favorite Repositories</h3>
      <ReposList repos={favorites} />
    </div>
  );
};
export default FavoritesPage;
