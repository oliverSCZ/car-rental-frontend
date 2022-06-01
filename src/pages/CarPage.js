/* eslint-disable react/jsx-closing-bracket-location */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postFavorite } from '../redux/favorites/favorites';

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
    dispatch(postFavorite(newFavourite, sessionStatus));
  };
  return (
    <div className=" mx-auto pt-10">
      <div className="mt-10 flex flex-col justify-between">
        <h3 className="text-base font-semibold tracking-wide uppercase text-gray-900 sm:mt-0 sm:col-span-2 p-3">
          {currentCar.make}
          {' '}
          {currentCar.name}
        </h3>
        <img
          className="shadow-xl"
          src={currentCar.image}
          alt="Toyota Corolla"
        />
        <div className="bg-white">
          <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-3 text-justify">
            {currentCar.description}
          </p>
        </div>
        <div className="rounded-md shadow">
          <button
            type="button"
            className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 ${
              sessionStatus.logged_in ? 'block' : 'hidden'
            }`}
            onClick={addCarToFavorites}>
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
