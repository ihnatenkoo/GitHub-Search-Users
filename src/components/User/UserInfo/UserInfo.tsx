import { FC } from 'react';
import { ISingleUser } from '../../../types/types';
import { checkTextValue } from '../../../utils/';
interface IUserInfoProps {
  user: ISingleUser;
  error: boolean;
}

const UserInfo: FC<IUserInfoProps> = ({ user, error }) => {
  const { login, avatar_url, bio, location, name, public_repos, blog, html_url } = user!;

  if (error) return <p className="mr-10 font-medium text-red-400">Error user loading...</p>;

  return (
    <div className="mr-10 w-[500px] max-w-full">
      <h3 className="font-bold text-gray-600 mb-3 text-lg">User Information</h3>
      <div className="flex flex-wrap">
        <img
          src={avatar_url}
          alt={`${name} avatar`}
          className="mb-3 max-w-full w-[220px] h-auto mr-5 rounded-md"
        />
        <ul className="text-gray-600 font-bold">
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
                className="font-medium text-blue-500 mt-1 block"
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
              className="font-medium text-blue-500 mt-1 block"
            >
              {html_url}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default UserInfo;
