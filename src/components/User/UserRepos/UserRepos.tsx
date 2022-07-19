import { FC } from 'react';
import { IRepos } from '../../../types/types';
import { checkTextValue } from '../../../utils';

interface IUserReposProps {
  repos: Array<IRepos> | undefined;
  error: boolean;
}

const UserRepos: FC<IUserReposProps> = ({ repos, error }) => {
  console.log(repos);
  return (
    <div className="w-[500px] max-w-full h-[300px]">
      <h3 className="font-bold text-gray-600 mb-3 text-lg">Repositories</h3>
      <ul className="h-[300px] overflow-hidden overflow-y-scroll">
        {repos &&
          repos.map((i) => (
            <li className="mb-2 p-3 bg-white border">
              <p className="mb-2 font-bold">{i.name}</p>
              <p className="mb-2 font-light">{i.description}</p>
              <div>
                <span className="mr-5 font-medium">
                  Language: <span className="font-normal">{checkTextValue(i.language)}</span>
                </span>
                <span className="mr-5 font-medium">
                  Watchers: <span className="font-normal">{i.watchers}</span>
                </span>
                <span className="mr-5 font-medium">
                  Forks: <span className="font-normal">{i.forks}</span>
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default UserRepos;
