import { FC, MouseEvent } from 'react';
import { useAppDispatch } from '../../../hooks';
import { ADD_FAVORITE_REPO } from '../../../store/github/github.slice';
import { IRepos } from '../../../types/types';
interface IBtnProps {
  item: IRepos;
}

const AddFavoriteBtn: FC<IBtnProps> = ({ item }) => {
  const dispatch = useAppDispatch();

  const clickHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(ADD_FAVORITE_REPO(item));
  };

  return (
    <button
      onClick={clickHandler}
      className="px-4 sml:px-5 py-2 rounded bg-amber-400  text-white hover:bg-amber-500 transition-all"
    >
      Add
    </button>
  );
};
export default AddFavoriteBtn;
