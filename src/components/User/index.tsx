import { useEffect } from 'react';
import { useAppSelector } from '../../hooks';
import { useLazyGetUserInfoQuery } from '../../store/github/github.api';
import UserInfo from './UserInfo/UserInfo';

const User = () => {
  const { selectedUser } = useAppSelector((state) => state.user);
  const [fetchUser, { data: user, isError }] = useLazyGetUserInfoQuery();

  useEffect(() => {
    if (selectedUser) fetchUser(selectedUser);
  }, [selectedUser, fetchUser]);

  return (
    <div>
      {isError && <h2 className="text-center text-red-600">Something went wrong...</h2>}
      {user && <UserInfo user={user} />}
    </div>
  );
};

export default User;
