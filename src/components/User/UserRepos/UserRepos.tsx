import { FC } from 'react';
import { IRepos } from '../../../types/types';
import { checkTextValue, setIconPath } from '../../../utils';

import dayjs from 'dayjs';

interface IUserReposProps {
  repos: Array<IRepos> | undefined;
  error: boolean;
}

const UserRepos: FC<IUserReposProps> = ({ repos, error }) => {
  if (error) return <p className="font-medium text-red-400">Error repositories loading...</p>;

  return (
    <div className="w-[550px] max-w-full h-[300px]">
      <h3 className="font-bold text-gray-600 mb-3 text-lg">Repositories</h3>
      <ul className="h-[300px] overflow-hidden overflow-y-auto">
        {repos?.length === 0 && (
          <p className="font-medium text-red-400">List of repositories is empty</p>
        )}
        {repos &&
          repos.map((i) => (
            <li
              key={i.id}
              className="mb-2 p-3 bg-white border rounded-xl cursor-pointer hover:bg-gray-200 transition-all"
            >
              <a href={i.html_url} className="flex items-center" target="_blank" rel="noreferrer">
                <div className="mr-5 text-center text-sm w-[65px] shrink ">
                  <img
                    className="mb-1 w-[65px] h-auto rounded-xl"
                    src={setIconPath(i.language)}
                    alt={`${i.language} icon`}
                  />
                  <span>{checkTextValue(i.language)}</span>
                </div>

                <article>
                  <p className="mb-2 font-bold">{i.name}</p>
                  <p className="mb-2 font-light">
                    {i.description?.length > 60
                      ? i.description.slice(0, 60) + '...'
                      : i.description}
                  </p>
                  <div className="mb-2">
                    <span className="mr-5 font-medium">
                      Watchers: <span className="font-normal">{i.watchers}</span>
                    </span>
                    <span className="mr-5 font-medium">
                      Forks: <span className="font-normal">{i.forks}</span>
                    </span>
                  </div>
                  <div>
                    <span className="mr-5 italic text-gray-400 text-sm">
                      Created: {dayjs(i.created_at).format('DD-MM-YYYY')}
                    </span>
                    <span className="italic text-gray-400 text-sm">
                      Updated: {dayjs(i.updated_at).format('DD-MM-YYYY')}
                    </span>
                  </div>
                </article>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default UserRepos;
