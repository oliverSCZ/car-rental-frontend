import { useEffect } from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from './redux/favorites/favorites';
import { getCars } from './redux/cars/cars';
import CarsList from './components/Cars/CarsList';
import Slider from "react-slick";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getFavorites());
    dispatch(getCars());
  }, []);

const carSelector = useSelector(
    (state) => state.carsReducer,
  );

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "180px",
  slidesToShow: 2,
  speed: 500
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
    <div className="App">
      <div>
      <Slider {...settings}>
          {cars} 
      </Slider>
      </div>
    </div>
  );
}

export default App;
