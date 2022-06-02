/* eslint-disable react/jsx-closing-bracket-location */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postFavorite, deleteFavourite } from '../redux/favorites/favorites';
import StarRating from '../components/Cars/StarRating';

const CarPage = () => {
  const { carId } = useParams();
  const cars = useSelector((state) => state.carsReducer);

  const favorites = useSelector((state) => state.favoritesReducer);

  const sessionStatus = useSelector((state) => state.sessionStatus);

  const currentCar = cars.filter((car) => car.id === parseInt(carId, 10))[0];

  const inFavorites = () => {
    if (favorites.length > 0) {
      const favorite = favorites.filter(
        (fav) => fav.car_id === parseInt(currentCar.id, 10)
      );

      return favorite.length > 0;
    }
    return favorites.length > 0;
  };

  const dispatch = useDispatch();

  const addCarToFavorites = () => {
    const newFavourite = {
      car_id: currentCar.id,
    };
    dispatch(postFavorite(newFavourite, sessionStatus));
  };

  const removeCarToFavorites = (favoriteId) => {
    const favorite = {
      id: favoriteId,
    };

    dispatch(deleteFavourite(favorite, sessionStatus));
  };
  return (
    <div className="h-full flex justify-between mx-auto pt-10">
      <div className="flex flex-col justify-between">
        <h3 className="text-3xl font-bold tracking-wide text-gray-700 sm:mt-0 mb-5 sm:col-span-2 p-3">
          {currentCar.name}
        </h3>
        <div className="align-text-bottom mix-blend-multiply flex bg-gradient-to-t from-gray-800 via-transparent to-transparent">
          <div className="z-50 absolute text-xl self-end text-white p-5 flex w-full justify-between items-end">
            <StarRating />
            <div className="flex align-bottom content-end px-5 font-semibold">
              <span className="align-bottom mx-2">{currentCar.make}</span>-
              <span className="align-bottom mx-2">{currentCar.model}</span>
            </div>
          </div>
          <img
            className="shadow-xl mix-blend-overlay"
            src={currentCar.image}
            alt="Toyota Corolla"
          />
        </div>
        <div className="bg-white h-full container flex flex-col justify-between">
          <div className="bg-white p-9 pb-4">
            <div className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 p-3 text-justify">
              <p className="font-extrabold mb-5 text-base">About this car</p>
              {currentCar.description}
            </div>
          </div>
          <div className="rounded-md shadow">
            <button
              type="button"
              className={`active:bg-orange-400 w-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 ${
                sessionStatus.logged_in ? 'block' : 'hidden'
              } ${inFavorites() ? 'hidden' : 'block'}`}
              onClick={addCarToFavorites}>
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
