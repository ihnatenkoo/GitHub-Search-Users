import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>

      <span>
        <Link to="/" className="mr-4 hover:text-gray-300 transition-all">
          Home
        </Link>
        <Link to="/favorite" className="hover:text-gray-300 transition-all">
          Favorite
        </Link>
      </span>
    </nav>
  );
};
export default Navigation;
