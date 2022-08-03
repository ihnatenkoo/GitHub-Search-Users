import { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IRepos } from '../../../types/types';
import Scroll from '../../ui/Scroll/Scroll';
import ReposList from './ReposList/ReposList';

import '../../../css/animations.css';
interface IUserReposProps {
  repos: Array<IRepos> | undefined;
  error?: boolean;
  showCount?: boolean;
  title: string;
}

const UserRepos: FC<IUserReposProps> = ({ repos, error, title, showCount }) => {
  if (error) return <p className="font-medium text-red-400">Error repositories loading...</p>;

  return (
    <div className="w-[550px] max-w-full">
      <h3 className="font-bold text-gray-600 mb-2 sml:mb-3 text-lg text-center sml:text-left">
        {title} {showCount && `(${repos?.length})`}
      </h3>
      {repos?.length === 0 && (
        <p className="font-medium text-red-300 text-center sml:text-left">
          Repositories list is empty
        </p>
      )}
      <Scroll>
        <ul className="h-[620px] mr-4">
          <TransitionGroup>
            {repos?.map((repo) => (
              <CSSTransition key={repo.id} timeout={400}>
                <ReposList repo={repo} key={repo.id} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ul>
      </Scroll>
    </div>
  );
};

export default UserRepos;
