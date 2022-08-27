import { IFavUser } from '../types';

export const checkTextValue = (
	text: string | null | undefined,
	value = 50
): string => {
	if (text && text?.length > value) {
		return text.slice(0, value) + '...';
	}
	if (text) return text;
	return 'No info';
};

export const setIconPath = (text: string): string => {
	switch (text) {
		case 'TypeScript':
		case 'JavaScript':
		case 'HTML':
		case 'CSS':
		case 'Go':
		case 'Rust':
		case 'Python':
		case 'Ruby':
		case 'Java':
		case 'C':
		case 'C++':
			return `/images/languages/${text}.png`;

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
