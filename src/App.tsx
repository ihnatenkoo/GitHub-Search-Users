import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <main className="bg-gray-50 h-screen">
      <Navigation />
      <section className="mt-10 px-2">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/favorite" element={<FavoritesPage />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
