import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { useDispatch } from 'react-redux';
import { getCars } from './redux/cars/cars';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import FavoritesPage from './pages/FavoritesPage';
import CarPage from './pages/CarPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/car/:carId" element={<CarPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
