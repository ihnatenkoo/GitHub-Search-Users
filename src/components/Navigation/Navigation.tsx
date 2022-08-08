import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
	const { pathname } = useLocation();

	return (
		<nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
			<h3 className="font-bold">Github Search</h3>

			<span>
				<Link
					to="/"
					className="mr-4 hover:text-gray-300 transition-all"
					style={pathname === '/' ? { color: 'rgb(251 191 36)' } : undefined}
				>
					Home
				</Link>
				<Link
					to="/favorites"
					className="hover:text-gray-300 transition-all"
					style={
						pathname === '/favorites' ? { color: 'rgb(251 191 36)' } : undefined
					}
				>
					Favorites
				</Link>
			</span>
		</nav>
	);
};
export default Navigation;
