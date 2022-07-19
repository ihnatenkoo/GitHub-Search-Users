import { FC } from 'react';
import { ISingleUser } from '../../../types/types';

interface IUserInfoProps {
  user: ISingleUser;
}

const UserInfo: FC<IUserInfoProps> = ({ user }) => {
  const { login, avatar_url, bio, location, name, public_repos, email, blog, html_url } = user!;

  return (
    <>
      <h3 className="text-center font-bold text-gray-600 mb-4 text-lg">User Information</h3>
      <div className="flex flex-row">
        <img
          src={avatar_url}
          alt={`${name} avatar`}
          className="max-w-full w-[220px] h-auto mr-5 rounded-md"
        />
        <ul className="text-gray-600 font-bold">
          <li className="mb-2">
            Login: <span className="font-normal text-gray-500">{login}</span>
          </li>
          <li className="mb-2">
            Name: <span className="font-normal text-gray-500">{name}</span>
          </li>
          <li className="mb-2 leading-5">
            Bio: <span className="font-normal text-gray-500">{bio}</span>
          </li>
          <li className="mb-2">
            Location: <span className="font-normal text-gray-500">{location}</span>
          </li>
          <li className="mb-2">
            Repositories: <span className="font-normal text-gray-500">{public_repos}</span>
          </li>
          <li className="mb-2">
            Blog:{' '}
            <a
              href={blog}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-500 mt-1 block"
            >
              {blog}
            </a>
          </li>
          <li>
            GitHub:{' '}
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-blue-500 mt-1 block"
            >
              {html_url}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default UserInfo;
