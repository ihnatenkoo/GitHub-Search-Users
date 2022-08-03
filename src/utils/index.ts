import { IFavUser } from '../types/types';

export const checkTextValue = (text: string | null | undefined, value: number = 50): string => {
  if (text && text?.length > value) {
    return text.slice(0, value) + '...';
  }
  if (text) return text;
  return 'No info';
};

export const setIconPath = (text: string): string => {
  switch (text) {
    case 'TypeScript':
      return '/images/languages/typescript.png';

    case 'JavaScript':
      return '/images/languages/javascript.png';

    case 'HTML':
      return '/images/languages/html.png';

    case 'CSS':
      return '/images/languages/css.png';

    case 'Go':
      return '/images/languages/go.png';

    case 'Rust':
      return '/images/languages/rust.png';

    case 'Python':
      return '/images/languages/python.png';

    case 'Ruby':
      return '/images/languages/ruby.png';

    case 'Java':
      return '/images/languages/java.png';

    case 'C++':
      return '/images/languages/cplus.png';

    case 'C':
      return '/images/languages/c.png';

    default:
      return '/images/languages/others.webp';
  }
};

export const paginate = (users: Array<IFavUser>): IFavUser[][] => {
  const itemsPerPage = 4;
  const pages = Math.ceil(users.length / itemsPerPage);

  const usersPage = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return users.slice(start, start + itemsPerPage);
  });

  return usersPage;
};
