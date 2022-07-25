import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { REMOVE_FAVORITE_USER } from '../../store/github/github.slice';
import { IFavUser } from '../../types/types';
import { paginate } from '../../utils';
import './FavoriteUsers.css';

interface IFavUsers {
  users: Array<IFavUser>;
}

const FavoriteUsers: FC<IFavUsers> = ({ users }) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [usersPagesArr, setUsersPagesArr] = useState<Array<IFavUser>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUsersPagesArr(paginate(users, pageIndex));
  }, [pageIndex, users]);

  return (
    <div className="mb-5 sml:mr-10 w-[450px] max-w-full">
      <h3
        className="text-center sml:text-left mb-2 sml:mb-3 font-bold text-gray-600 text-lg"
        onClick={() => setPageIndex((prev) => prev + 1)}
      >
        Favorite Users
      </h3>
      {usersPagesArr?.length === 0 && (
        <p className="font-medium text-red-300 text-center sml:text-left">User list is empty</p>
      )}
      <div className="grid justify-items-center sml:grid-cols-2 gap-3 sml:gap-2 max-w-full">
        {usersPagesArr &&
          usersPagesArr.map((user: IFavUser) => (
            <article
              className="fav-user relative border-2 border-gray-200 rounded-xl overflow-hidden w-3/4 sml:w-[220px] xl:hover:shadow-md transition-all-03"
              key={user.login}
            >
              <header className="px-5 pt-3 pb-1 relative flex items-center background-gradient-gray">
                <img
                  className="mr-3 w-[65px] h-[65px] rounded-full"
                  src={user.avatar_url}
                  alt="user avatar"
                />
                <div>
                  <h3 className="font-bold text-sm">{user.login}</h3>
                  <span className="text-sm text-gray-400">{user.name}</span>
                </div>
              </header>
              <ul>
                <li className=" px-5 py-2.5 flex justify-between border-b-2 border-gray-100 ">
                  <span className="text-gray-400">Repositories:</span>
                  <span>{user.public_repos}</span>
                </li>
                <li className=" px-5 py-2.5 flex justify-between border-b-2 border-gray-100">
                  <span className="text-gray-400">Followers:</span>
                  <span>{user.followers}</span>
                </li>
                <li className=" px-5 py-2.5 flex justify-between border-b-2 border-gray-100">
                  <span className="text-gray-400">Following:</span>
                  <span>{user.following}</span>
                </li>
              </ul>

              <nav className="nav hidden xl:flex w-2/3 justify-center flex-col position-absolute-center opacity-0 transition-all-03 z-10 ">
                <button className="mb-3 px-5 py-2.5 rounded-md bg-amber-400  text-white hover:bg-amber-500 transition-all">
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    View GitHub
                  </a>
                </button>
                <button
                  onClick={() => dispatch(REMOVE_FAVORITE_USER(user.login))}
                  className="px-5 py-2.5 rounded-md bg-red-500  text-white hover:bg-red-600 transition-all"
                >
                  Remove User
                </button>
              </nav>
              <button
                className="w-[25px] h-[25px] absolute top-1.5 right-1.5 text-gray-300 cursor-pointer xl:hidden"
                onClick={() => dispatch(REMOVE_FAVORITE_USER(user.login))}
              >
                <span className="material-icons-outlined ">close</span>
              </button>
            </article>
          ))}
      </div>
    </div>
  );
};
export default FavoriteUsers;
