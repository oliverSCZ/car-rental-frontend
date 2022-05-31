import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postBook } from '../redux/favorites/favorites';

const CarPage = () => {
  window.scrollTo(0, 0);
  const { carId } = useParams();
  const cars = useSelector((state) => state.carsReducer);

  const sessionStatus = useSelector((state) => state.sessionStatus);

  const currentCar = cars.filter((car) => car.id === parseInt(carId, 10))[0];

  const dispatch = useDispatch();

  const addCarToFavorites = () => {
    const newFavourite = {
      car_id: currentCar.id,
    };
    dispatch(postBook(newFavourite, sessionStatus));
  };

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
        <button
          type="button"
          className="btn btn-primary"
          onClick={addCarToFavorites}>
          Add to Favorites
        </button>
      </div>
    </div>
  );
};

export default CarPage;
