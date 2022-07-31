import { FC } from 'react';
import FavoriteUsers from '../components/User/FavoriteUsers/FavoriteUsers';
import UserRepos from '../components/User/UserRepos/UserRepos';
import { useAppSelector } from '../hooks';

const FavoritesPage: FC = () => {
  const { repos, users } = useAppSelector((state) => state.user.favorites);

  return (
    <section className="flex justify-center flex-wrap">
      <FavoriteUsers users={users} />
      <UserRepos repos={repos} title="Favorite Repositories" />
    </section>
  );
};
export default FavoritesPage;
