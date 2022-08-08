import OverlayScrollbars from 'overlayscrollbars';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React, { FC } from 'react';

interface IScroll extends React.HTMLAttributes<HTMLDivElement> {
	customOtp?: OverlayScrollbars.Options;
}

const opt: OverlayScrollbars.Options = {
	scrollbars: { clickScrolling: true },
	overflowBehavior: {
		x: 'hidden',
		y: 'scroll',
	},
};

const Scroll: FC<IScroll> = ({ children, customOtp }) => {
	return (
		<OverlayScrollbarsComponent options={{ ...opt, ...customOtp }}>
			{children}
		</OverlayScrollbarsComponent>
	);
};

export default Scroll;
