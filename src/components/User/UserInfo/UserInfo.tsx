import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/';
import { ADD_FAVORITE_USER, REMOVE_FAVORITE_USER } from '../../../store/github/github.slice';
import { IFavUser, ISingleUser } from '../../../types/types';
import { checkTextValue } from '../../../utils';
interface IUserInfoProps {
  user: ISingleUser;
  error: boolean;
}

const UserInfo: FC<IUserInfoProps> = ({ user, error }) => {
  const favUsers = useAppSelector((state) => state.user.favorites.users);
  const {
    login,
    avatar_url,
    bio,
    location,
    name,
    public_repos,
    blog,
    html_url,
    followers,
    following
  } = user;

  const [isFav, setIsFav] = useState<boolean>(favUsers.some((i: IFavUser) => i.login === login));

  const favUserData: IFavUser = {
    login,
    name,
    avatar_url,
    public_repos,
    followers,
    following,
    html_url
  };

  const dispatch = useAppDispatch();

  const favClickHandler = (login: string) => {
    isFav ? dispatch(REMOVE_FAVORITE_USER(login)) : dispatch(ADD_FAVORITE_USER(favUserData));
    setIsFav((prev) => !prev);
  };

  if (error) return <p className="mr-10 font-medium text-red-400">Error user loading...</p>;

  return (
    <div className="w-[550px] max-w-full">
      <h3 className="font-bold text-gray-600 mb-3 text-lg">User Information</h3>
      <div className="relative flex flex-wrap">
        <img
          src={avatar_url}
          alt={`${name} avatar`}
          className="mr-3 mb-3 max-w-full w-[220px] h-[220px] rounded-md"
        />
        <ul className="text-gray-600 font-bold max-w-[300px]">
          <li className="mb-2">
            Login: <span className="font-normal text-gray-500">{login}</span>
          </li>
          <li className="mb-2">
            Name: <span className="font-normal text-gray-500">{checkTextValue(name)}</span>
          </li>
          <li className="mb-2 leading-5">
            Bio: <span className="font-normal text-gray-500">{checkTextValue(bio)}</span>
          </li>
          <li className="mb-2">
            Location: <span className="font-normal text-gray-500">{checkTextValue(location)}</span>
          </li>
          <li className="mb-2">
            Repositories: <span className="font-normal text-gray-500">{public_repos}</span>
          </li>
          <li className="mb-2">
            Blog:{' '}
            {blog ? (
              <a
                href={blog}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-500 mt-1 block"
              >
                {blog}
              </a>
            ) : (
              '-'
            )}
          </li>
          <li>
            GitHub:{' '}
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-500 mt-1 block"
            >
              {html_url}
            </a>
          </li>
        </ul>
        <button
          onClick={() => favClickHandler(login)}
          className="absolute top-2 left-2 text-red-700  cursor-pointer bg-zinc-200  rounded-full select-none"
        >
          <span className="material-icons-outlined text-4xl p-1.5">
            {isFav ? 'favorite' : 'favorite_border'}
          </span>
        </button>
      </div>
    </div>
  );
};
export default UserInfo;
