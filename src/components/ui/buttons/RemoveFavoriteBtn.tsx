import { FC, MouseEvent } from 'react';
import { useAppDispatch } from '../../../hooks';
import { REMOVE_FAVORITE_REPO } from '../../../store/github/github.slice';
interface IBtnProps {
  id: number;
}

export const RemoveFavoriteBtn: FC<IBtnProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(REMOVE_FAVORITE_REPO(id));
  };

  return (
    <button
      onClick={clickHandler}
      className="px-3 sml:px-5 py-2 rounded bg-red-500  text-white hover:bg-red-600 transition-all"
    >
      Remove
    </button>
  );
};
