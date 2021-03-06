import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { useDispatch } from 'react-redux';
import { getCars } from './redux/cars/cars';
import Options from './components/Options';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import FavoritesList from './components/Favorites/FavoritesList';
import CarPage from './pages/CarPage';
import getData from './redux/getLocalData';
import Footer from './components/Footer';

getData();
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <div className="App h-screen">
      <Options />
      <Header />
      <Routes>
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/car/:carId" element={<CarPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
