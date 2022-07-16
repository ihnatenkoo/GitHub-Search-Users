import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const { data, isLoading, isError } = useSearchUsersQuery('ihnatenkoo');
  return <div>HomePage</div>;
};
export default HomePage;
