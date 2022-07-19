import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { useLazyGetUserInfoQuery, useLazyGetUserReposQuery } from '../../store/github/github.api';
import UserInfo from './UserInfo/UserInfo';
import UserRepos from './UserRepos/UserRepos';

const User = () => {
  const { selectedUser } = useAppSelector((state) => state.user);
  const [fetchUser, { data: user, isFetching, isError: isUserError }] = useLazyGetUserInfoQuery();
  const [fetchUserRepos, { data: repos, isError: isReposError }] = useLazyGetUserReposQuery();

  useEffect(() => {
    if (selectedUser) {
      fetchUser(selectedUser);
      fetchUserRepos(selectedUser);
    }
  }, [selectedUser, fetchUser, fetchUserRepos]);

  if (isFetching) {
    return <div className="text-center">Loading...</div>;
  }
  return (
    <div className="flex justify-center flex-wrap max-w-full h-[300px] max-h-full">
      {user && (
        <>
          <UserInfo user={user} error={isUserError} />
          <UserRepos repos={repos} error={isReposError} />
        </>
      )}
    </div>
  );
};

export default User;
