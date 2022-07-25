import { FC } from 'react';
import { IFavUser, TypeSetState } from '../../types/types';

interface IPagination {
  setPageIndex: TypeSetState<number>;
  pageIndex: number;
  usersPagesArr: IFavUser[][];
}

const Pagination: FC<IPagination> = ({ pageIndex, setPageIndex, usersPagesArr }) => {
  const nextPage = (pageIndex: number) => {
    const page = pageIndex + 1;
    if (page > usersPagesArr.length) return;
    setPageIndex((prev) => prev + 1);
  };

  const prevPage = (pageIndex: number) => {
    const page = pageIndex - 1;
    if (page === 0) return;
    setPageIndex((prev) => prev - 1);
  };

  return (
    <nav className="mt-5 sml:mt-3 flex justify-center items-center sml:col-span-2 h-[20px]">
      <button onClick={() => prevPage(pageIndex)}>
        <span className="material-icons-outlined mr-1.5 text-base cursor-pointer text-gray-400 hover:text-gray-800 transition-all-03 ">
          arrow_back_ios
        </span>
      </button>
      <ul className="flex">
        {usersPagesArr &&
          usersPagesArr.map((_, i) => (
            <li
              onClick={() => setPageIndex(i + 1)}
              className="mr-2 cursor-pointer text-gray-400 text-sm"
              style={
                i === pageIndex - 1
                  ? { color: '#000', fontWeight: 'bold', fontSize: '20px' }
                  : undefined
              }
              key={i}
            >
              {i + 1}
            </li>
          ))}
      </ul>
      <button onClick={() => nextPage(pageIndex)}>
        <span className="material-icons-outlined text-base h-[10px] cursor-pointer text-gray-400 hover:text-gray-800 transition-all-03">
          arrow_forward_ios
        </span>
      </button>
    </nav>
  );
};
export default Pagination;
