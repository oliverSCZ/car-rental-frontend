import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import store from '../redux/configureStore';

const CarPage = () => {
  window.scrollTo(0, 0);
  const { carId } = useParams();
  const cars = useSelector((state) => state.carsReducer);

  const currentCar = cars.filter(
    (car) => car.id === parseInt(carId, 10),
  )[0];

  console.log(store.getState());

  return (
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold">This is a details page of</h1>
      <div className="container mx-auto text-3xl">
        {currentCar.name}
        <img
          className="shadow-xl rounded-md"
          src={currentCar.image}
          alt={currentCar.model}
          width="300"
        />
      </div>
    </div>
  );
};

export default CarPage;
