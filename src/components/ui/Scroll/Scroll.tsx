import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { FC } from 'react';
import OverlayScrollbars from 'overlayscrollbars';

interface IScroll extends React.HTMLAttributes<HTMLDivElement> {
  customOtp?: OverlayScrollbars.Options;
}

const opt: OverlayScrollbars.Options = {
  scrollbars: { clickScrolling: true },
};

const Scroll: FC<IScroll> = ({ children, customOtp }) => {
  return (
    <OverlayScrollbarsComponent options={{ ...opt, ...customOtp }}>
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default Scroll;
