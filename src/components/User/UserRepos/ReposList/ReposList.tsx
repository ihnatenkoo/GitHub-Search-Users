import { useAppSelector } from '../../../../hooks';
import { checkTextValue, setIconPath } from '../../../../utils';
import { FC } from 'react';
import { IRepos } from '../../../../types/types';
import AddFavoriteBtn from '../../../ui/buttons/AddFavoriteBtn';
import RemoveFavoriteBtn from '../../../ui/buttons/RemoveFavoriteBtn';

import dayjs from 'dayjs';
interface IReposList {
  repos: Array<IRepos> | undefined;
}

const ReposList: FC<IReposList> = ({ repos }) => {
  const { repos: favRepos } = useAppSelector((state) => state.user.favorites);

  return (
    <ul className="h-[640px] mr-4">
      {repos?.length === 0 && (
        <p className="font-medium text-red-300 text-center sml:text-left">
          Repository list is empty
        </p>
      )}
      {repos &&
        repos.map((i) => (
          <li
            key={i.id}
            className="relative mb-3 sml:mb-2 px-1.5 py-2 sml:px-3 sml:pt-4 sml:pb-3 bg-white border rounded-xl cursor-pointer xl:hover:bg-gray-200 xl:hover:shadow-md transition-all background-gradient-gray"
          >
            <a href={i.html_url} className="flex items-center" target="_blank" rel="noreferrer">
              <div className="flex items-center flex-col sml:mr-5 mr-2 text-center text-sm max-w-[75px]">
                <img
                  className="sml:mb-1 w-[50px] h-auto rounded-xl"
                  src={setIconPath(i.language)}
                  alt={`${i.language} icon`}
                />
                <span className="min-w-[65px] text-sm">{checkTextValue(i.language)}</span>
              </div>

              <article className="w-[425px]">
                <p className="mb-0.5 font-bold text-sm sml:text-base">{i.full_name}</p>
                <p className="hidden sml:block sml:mb-1 sml:font-light ">
                  {i.description?.length > 55 ? i.description.slice(0, 55) + '...' : i.description}
                  {!i.description && 'No description'}
                </p>
                <div>
                  <span className="mr-3 font-medium text-sm sml:text-base">
                    Watchers: <span className="font-normal">{i.watchers}</span>
                  </span>
                  <span className="font-medium text-sm sml:text-base">
                    Forks: <span className="font-normal">{i.forks}</span>
                  </span>
                </div>
                <div className="flex flex-col sml:flex-row">
                  <span className="mb-0.5 sml:mb-0 mr-5 italic text-gray-400 sml:text-sm text-xs">
                    Created: {dayjs(i.created_at).format('DD-MM-YYYY')}
                  </span>
                  <span className="italic text-gray-400 sml:text-sm text-xs">
                    Updated: {dayjs(i.updated_at).format('DD-MM-YYYY')}
                  </span>
                </div>
              </article>
            </a>
            <div className="absolute bottom-2 right-2 sml:bottom-3 sml:right-3">
              {favRepos.some((repo) => repo.id === i.id) ? (
                <RemoveFavoriteBtn id={i.id} />
              ) : (
                <AddFavoriteBtn item={i} />
              )}
            </div>
          </li>
        ))}
    </ul>
  );
};
export default ReposList;
