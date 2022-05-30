import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from './redux/favorites/favorites';
import { getCars } from './redux/cars/cars';
import CarsList from './components/Cars/CarsList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getFavorites());
    dispatch(getCars());
  }, []);

const carSelector = useSelector(
    (state) => state.carsReducer,
  );

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
    <div className="App">
      <div className="container-fluid">
          {cars} 
      </div>
    </div>
  );
}

export default App;
