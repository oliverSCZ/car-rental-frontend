import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getCars } from './redux/cars/cars';
import CarsList from './components/Cars/CarsList';
import Navigation from './components/Navigation';
import FavoritesList from './components/Favorites/FavoritesList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  const carSelector = useSelector((state) => state.carsReducer);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '80px',
    slidesToShow: 2,
    speed: 500,
  };
  const cars = carSelector.map((car) => (
    <CarsList
      key={car.id}
      id={car.id}
      name={car.name}
      image={car.image}
      make={car.make}
      model={car.model}
    />
  ));

  return (
    <div className="container-fluid">
      <div>
        <Navigation />
        <p className="page-title">Cars</p>
        <p className="sub-title">Sheer driving pleasure</p>
        <Routes>
          <Slider {...settings}>{cars}</Slider>
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
