import SearchPanel from '../components/SearchPanel/SearchPanel';
import User from '../components/User';

const HomePage = () => {
  return (
    <div className="flex justify-center mt-10 mx-auto">
      <div className="relative w-[560px]">
        <SearchPanel />
        <User />
      </div>
    </div>
  );
};
export default HomePage;
