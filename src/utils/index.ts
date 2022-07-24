export const checkTextValue = (text: string | null | undefined): string => {
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
