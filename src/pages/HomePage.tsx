import { FC } from 'react';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import User from '../components/User/User';

export const HomePage: FC = () => {
  return (
    <>
      <SearchPanel />
      <User />
    </>
  );
};
