import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, FavoritesPage, Page404 } from './pages';
import Navigation from './components/Navigation/Navigation';

const App: FC = () => {
  return (
    <main className="bg-gray-50 min-h-screen h-max">
      <Navigation />
      <section className="mt-5 sml:mt-10 px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </section>
    </main>
  );
};

export default App;
