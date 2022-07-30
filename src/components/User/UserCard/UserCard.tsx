import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
import { REMOVE_FAVORITE_USER } from '../../../store/github/github.slice';
import { IFavUser } from '../../../types/types';

interface IUserCard {
  userList: Array<IFavUser>;
}

const UserCard: FC<IUserCard> = ({ userList = [] }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      {userList.length === 0 && (
        <p className="font-medium text-red-300 text-center sml:text-left">User list is empty</p>
      )}
      <div className="grid justify-items-center sml:grid-rows-layout195px sml:grid-cols-2 gap-3 sml:gap-2 max-w-full">
        {userList &&
          userList.map((user: IFavUser) => (
            <article
              className="fav-user relative border-2 border-gray-200 rounded-xl overflow-hidden w-3/4 sml:w-[220px] h-min xl:hover:shadow-md transition-all-25"
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
                <li className="px-5 pt-2.5 pb-4 flex justify-between">
                  <span className="text-gray-400">Following:</span>
                  <span>{user.following}</span>
                </li>
              </ul>

              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="xl:hidden pb-2 text-sky-500 block text-sm font-bold text-center"
              >
                Visit on GitHub
              </a>

              <nav className="nav hidden xl:flex w-2/3 justify-center flex-col position-absolute-center opacity-0 transition-all-25 z-10 ">
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
    </>
  );
};
export default UserCard;
