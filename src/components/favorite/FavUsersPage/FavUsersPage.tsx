import { FC } from 'react';
import { IFavUser } from '../../../types/types';
import FavUserCard from '../FavUserCard/FavUserCard';

import '../../../css/animations.css';
interface IUserPage {
  usersPage: Array<IFavUser>;
}

const UserPage: FC<IUserPage> = ({ usersPage = [] }) => {
  return (
    <div className="user-page grid justify-items-center sml:grid-rows-layout195px sml:grid-cols-2 gap-3 sml:gap-2 max-w-full">
      {usersPage.length === 0 ? (
        <p className="font-medium text-red-300 text-center sml:text-left">User list is empty</p>
      ) : (
        usersPage.map((user: IFavUser) => <FavUserCard user={user} key={user.login} />)
      )}
    </div>
  );
};

export default UserPage;
