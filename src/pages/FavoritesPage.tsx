import { FC } from 'react';
import FavoriteUsers from '../components/FavoriteUsers/FavoriteUsers';
import Repositories from '../components/Repositories';
import { useAppSelector } from '../hooks';

const FavoritesPage: FC = () => {
  const { repos, users } = useAppSelector((state) => state.user.favorites);

  return (
    <section className="flex justify-center flex-wrap">
      <FavoriteUsers users={users} />
      <Repositories repos={repos} title="Favorite Repositories" />
    </section>
  );
};
export default FavoritesPage;
