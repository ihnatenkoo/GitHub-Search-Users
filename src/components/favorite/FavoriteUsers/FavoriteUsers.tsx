import { FC, useEffect, useState } from 'react';
import { IFavUser } from '../../../types/types';
import { paginate } from '../../../utils';
import Pagination from '../../ui/Pagination/Pagination';
import FavUserPage from '../FavUsersPage/FavUsersPage';

import './FavoriteUsers.css';
import { CSSTransition } from 'react-transition-group';
interface IFavUsers {
  users: Array<IFavUser>;
}

const FavoriteUsers: FC<IFavUsers> = ({ users }) => {
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [switchPageHandler, setSwitchPageHandler] = useState<boolean>(false);
  const [usersPagesArr, setUsersPagesArr] = useState<IFavUser[][]>([]);

  const usersPage = usersPagesArr[pageIndex - 1];

  useEffect(() => {
    setUsersPagesArr(paginate(users));
  }, [pageIndex, users]);

  return (
    <div className="mb-5 sml:mr-10 w-[450px] max-w-full">
      <h3 className="text-center sml:text-left mb-2 sml:mb-3 font-bold text-gray-600 text-lg">
        Favorite Users
      </h3>

      <CSSTransition in={switchPageHandler} timeout={300}>
        <FavUserPage usersPage={usersPage} />
      </CSSTransition>

      {usersPagesArr?.length > 1 && (
        <Pagination
          setPageIndex={setPageIndex}
          usersPagesArr={usersPagesArr}
          pageIndex={pageIndex}
          setSwitchPageHandler={setSwitchPageHandler}
        />
      )}
    </div>
  );
};

export default FavoriteUsers;
