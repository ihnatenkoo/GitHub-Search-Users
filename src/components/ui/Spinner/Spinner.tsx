import React, { FC } from 'react';

import './Spinner.css';

export const Spinner: FC = () => {
	return (
		<div className="spinner">
			<div className="lds-default">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
