import { useAppSelector } from '../../hooks';
import { checkTextValue, setIconPath } from '../../utils';
import { FC } from 'react';
import { IRepos } from '../../types/types';
import AddFavoriteBtn from '../ui/buttons/AddFavoriteBtn';
import RemoveFavoriteBtn from '../ui/buttons/RemoveFavoriteBtn';

import dayjs from 'dayjs';

interface IReposList {
  repos: Array<IRepos> | undefined;
}

const ReposList: FC<IReposList> = ({ repos }) => {
  const { favorites } = useAppSelector((state) => state.user);

  return (
    <ul className="h-[500px] overflow-hidden overflow-y-auto">
      {repos?.length === 0 && (
        <p className="italic font-medium text-red-300">List of repositories is empty</p>
      )}
      {repos &&
        repos.map((i) => (
          <li
            key={i.id}
            className="relative mb-2 p-3 bg-white border rounded-xl cursor-pointer hover:bg-gray-200 hover:shadow-md transition-all"
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

              <article className="w-[425px]">
                <p className="mb-2 font-bold">{i.full_name}</p>
                <p className="mb-2 font-light">
                  {i.description?.length > 55 ? i.description.slice(0, 55) + '...' : i.description}
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
            <div className="absolute bottom-3 right-3">
              {favorites.some((favRepo) => favRepo.id === i.id) ? (
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
