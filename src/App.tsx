import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <main className="bg-gray-50 min-h-screen h-max">
      <Navigation />
      <section className="mt-5 sml:mt-10 px-2">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
