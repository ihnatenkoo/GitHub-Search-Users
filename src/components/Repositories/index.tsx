import { FC } from 'react';
import { IRepos } from '../../types/types';
import ReposList from './ReposList/ReposList';
interface IUserReposProps {
  repos: Array<IRepos> | undefined;
  error?: boolean;
  title: string;
}

const UserRepos: FC<IUserReposProps> = ({ repos, error, title }) => {
  if (error) return <p className="font-medium text-red-400">Error repositories loading...</p>;

  return (
    <div className="w-[550px] max-w-full">
      <h3 className="font-bold text-gray-600 mb-3 text-lg">{title}</h3>
      <ReposList repos={repos} />
    </div>
  );
};
export default UserRepos;
