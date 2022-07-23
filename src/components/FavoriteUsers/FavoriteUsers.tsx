import { FC } from 'react';
import { useAppDispatch } from '../../hooks';
import { REMOVE_FAVORITE_USER } from '../../store/github/github.slice';
import { IFavUser } from '../../types/types';
import './FavoriteUsers.css';

interface IFavUsers {
  users: Array<IFavUser>;
}

const FavoriteUsers: FC<IFavUsers> = ({ users }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="mr-10 w-[475px] max-w-full h-[650px] overflow-hidden">
      <h3 className="mb-3 font-bold text-gray-600  text-lg">Favorite Users</h3>
      <div className="flex flex-wrap max-w-full">
        {users?.length === 0 && (
          <p className="font-medium text-red-300">List of favorite users is empty</p>
        )}
        {users &&
          users.map((user: IFavUser) => (
            <article
              className="mb-2 mr-3 border-2 border-gray-200 rounded-xl overflow-hidden w-[220px] hover:shadow-md"
              key={user.login}
            >
              <header className="px-5 pt-3 pb-3.5 relative flex items-center background-gradient-gray">
                <img
                  className="mr-3 w-[50px] h-[50px] rounded-full"
                  src={user.avatar_url}
                  alt="user avatar"
                />
                <div>
                  <h3 className="font-bold text-sm">{user.login}</h3>
                  <span className="text-sm text-gray-400">{user.name}</span>
                </div>
                <button
                  onClick={() => dispatch(REMOVE_FAVORITE_USER(user.login))}
                  className="w-[22px] h-[22px] absolute z-10 top-0.5 right-1.5  text-gray-400 cursor-pointer btn"
                >
                  <span className="material-icons-outlined">close</span>
                </button>
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
            </article>
          ))}
      </div>
    </div>
  );
};
export default FavoriteUsers;
