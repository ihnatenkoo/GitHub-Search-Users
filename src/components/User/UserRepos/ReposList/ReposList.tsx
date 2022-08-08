import React, { FC, useState } from 'react';
import { useAppSelector } from '../../../../hooks';
import { checkTextValue, setIconPath } from '../../../../utils';
import { IRepos } from '../../../../types/types';
import { AddFavoriteBtn, RemoveFavoriteBtn } from '../../../ui/buttons/';

import '../../../../css/animations.css';

import dayjs from 'dayjs';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
interface IReposList {
  repo: IRepos;
}

const ReposList: FC<IReposList> = ({ repo }) => {
  const { repos: favRepos } = useAppSelector((state) => state.user.favorites);
  const [isFav, setIsFav] = useState<boolean>(favRepos.some((favRepo) => favRepo.id === repo.id));

  return (
    <li
      key={repo.id}
      className="repo-list-item relative mb-3 sml:mb-2 px-1.5 py-2 sml:px-3 sml:pt-3 sml:pb-3 bg-white border rounded-xl cursor-pointer xl:hover:bg-gray-200 xl:hover:shadow-md transition-all background-gradient-gray"
    >
      <a href={repo.html_url} className="flex items-center" target="_blank" rel="noreferrer">
        <div className="flex items-center flex-col sml:mr-5 mr-2 text-center text-sm max-w-[75px]">
          <img
            className="sml:mb-1 w-[50px] h-auto rounded-xl"
            src={setIconPath(repo.language)}
            alt={`${repo.language} icon`}
          />
          <span className="min-w-[65px] text-sm">{checkTextValue(repo.language)}</span>
        </div>

        <article className="w-[425px]">
          <p className="mb-0.5 font-bold text-sm sml:text-base">{repo.full_name}</p>
          <p className="hidden sml:block sml:mb-1 sml:font-light">
            {checkTextValue(repo.description)}
          </p>
          <div>
            <span className="mr-3 font-medium text-sm sml:text-base">
              Watchers: <span className="font-normal">{repo.watchers}</span>
            </span>
            <span className="font-medium text-sm sml:text-base">
              Forks: <span className="font-normal">{repo.forks}</span>
            </span>
          </div>
          <div className="flex flex-col sml:flex-row">
            <span className="mb-0.5 sml:mb-0 mr-5 italic text-gray-400 sml:text-sm text-xs">
              Created: {dayjs(repo.created_at).format('DD-MM-YYYY')}
            </span>
            <span className="italic text-gray-400 sml:text-sm text-xs">
              Updated: {dayjs(repo.updated_at).format('DD-MM-YYYY')}
            </span>
          </div>
        </article>
      </a>
      <SwitchTransition mode={'out-in'}>
        <CSSTransition key={isFav ? 'remove' : 'add'} timeout={150}>
          <div
            onClick={() => setIsFav((prevState) => !prevState)}
            className="change-btn absolute bottom-2 right-2 sml:bottom-3 sml:right-3"
          >
            {isFav ? <RemoveFavoriteBtn id={repo.id} /> : <AddFavoriteBtn item={repo} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </li>
  );
};

export default ReposList;
