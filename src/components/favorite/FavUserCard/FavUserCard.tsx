import { FC } from 'react';
import { useAppDispatch } from '../../../hooks';
import { REMOVE_FAVORITE_USER } from '../../../store/github/github.slice';
import { IFavUser } from '../../../types/types';
import { customToasts } from '../../../utils/toasts';

interface IFavUserCard {
  user: IFavUser;
}

const FavUserCard: FC<IFavUserCard> = ({ user }) => {
  const dispatch = useAppDispatch();

  const deleteUserFromFavorites = (login: string) => {
    customToasts('remove', login);
    dispatch(REMOVE_FAVORITE_USER(login));
  };

  return (
    <article
      className="fav-user relative border-2 border-gray-200 rounded-xl overflow-hidden w-3/4 sml:w-[220px] h-min xl:hover:shadow-md transition-all-25"
      key={user.login}
    >
      <header className="px-3.5 pt-3 pb-1 flex background-gradient-gray">
        <img
          className="mr-2.5 w-[65px] h-[65px] rounded-full"
          src={user.avatar_url}
          alt="user avatar"
        />
        <div className="break-all max-h-[100px] overflow-y-hidden">
          <h3 className="mt-1 font-bold text-sm">{user.login}</h3>
          <span className="text-sm text-gray-400">{user.name}</span>
        </div>
      </header>
      <ul className="px-4">
        <li className="  py-2.5 flex justify-between border-b-2 border-gray-100 ">
          <span className="text-gray-400">Repositories:</span>
          <span>{user.public_repos}</span>
        </li>
        <li className="  py-2.5 flex justify-between border-b-2 border-gray-100">
          <span className="text-gray-400">Followers:</span>
          <span>{user.followers}</span>
        </li>
        <li className=" pt-2.5 pb-4 flex justify-between">
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
          onClick={() => deleteUserFromFavorites(user.login)}
          className="px-5 py-2.5 rounded-md bg-red-500  text-white hover:bg-red-600 transition-all"
        >
          Remove User
        </button>
      </nav>

      <button
        className="w-[25px] h-[25px] absolute top-1.5 right-1.5 text-gray-300 cursor-pointer xl:hidden"
        onClick={() => deleteUserFromFavorites(user.login)}
      >
        <span className="material-icons-outlined ">close</span>
      </button>
    </article>
  );
};

export default FavUserCard;
