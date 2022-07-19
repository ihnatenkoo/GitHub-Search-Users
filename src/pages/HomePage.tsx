import SearchPanel from '../components/SearchPanel/SearchPanel';
import User from '../components/User';

const HomePage = () => {
  return (
    <section className="mt-10">
      <SearchPanel />
      <User />
    </section>
  );
};

export default HomePage;
