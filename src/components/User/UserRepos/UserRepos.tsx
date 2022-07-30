import { FC } from 'react';
import { IRepos } from '../../../types/types';
import Scroll from '../../ui/Scroll/Scroll';
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
      <h3 className="font-bold text-gray-600 mb-2 sml:mb-3 text-lg text-center sml:text-left">
        {title}
      </h3>
      <Scroll>
        <ReposList repos={repos} />
      </Scroll>
    </div>
  );
};

export default UserRepos;
