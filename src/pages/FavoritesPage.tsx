import { FC } from 'react';
import Repositories from '../components/Repositories';
import { useAppSelector } from '../hooks';

const FavoritesPage: FC = () => {
  const { repos } = useAppSelector((state) => state.user.favorites);

  return <Repositories repos={repos} title="Favorite Repositories" />;
};
export default FavoritesPage;
