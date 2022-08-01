import { FC, useCallback, useEffect } from 'react';
import { IFavUser, TypeSetState } from '../../../types/types';

interface IPagination {
  pageIndex: number;
  setPageIndex: TypeSetState<number>;
  setSwitchPageHandler: TypeSetState<boolean>;
  usersPagesArr: IFavUser[][];
  singlePage: IFavUser[];
}

const Pagination: FC<IPagination> = ({
  pageIndex,
  setPageIndex,
  usersPagesArr,
  singlePage,
  setSwitchPageHandler,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const switchPage = useCallback(
    (pageIndex: number, value: number) => {
      const page = pageIndex + value;

      if (page === 0 || page > usersPagesArr.length) return;
      setPageIndex((prevState) => prevState + value);

      scrollToTop();
      setSwitchPageHandler((prevState) => !prevState);
    },
    [usersPagesArr.length, setPageIndex, setSwitchPageHandler]
  );

  const setCertainPage = (i: number) => {
    setPageIndex(i);
    scrollToTop();
    setSwitchPageHandler((prevState) => !prevState);
  };

  useEffect(() => {
    if (singlePage.length === 0) switchPage(pageIndex, -1);
  }, [singlePage, pageIndex, switchPage]);

  return (
    <nav className="mt-5 sml:mt-3 flex justify-center items-center sml:col-span-2 h-[20px]">
      {usersPagesArr.length > 1 && (
        <>
          <button onClick={() => switchPage(pageIndex, -1)}>
            <span className="material-icons-outlined mr-1.5 text-base cursor-pointer text-gray-400 hover:text-gray-800 transition-all-25 ">
              arrow_back_ios
            </span>
          </button>
          <ul className="flex">
            {usersPagesArr.map((_, i) => (
              <li
                onClick={() => setCertainPage(i + 1)}
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
          <button onClick={() => switchPage(pageIndex, 1)}>
            <span className="material-icons-outlined text-base h-[10px] cursor-pointer text-gray-400 hover:text-gray-800 transition-all-25">
              arrow_forward_ios
            </span>
          </button>
        </>
      )}
    </nav>
  );
};

export default Pagination;
