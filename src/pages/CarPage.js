/* eslint-disable react/jsx-closing-bracket-location */
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postFavorite } from '../redux/favorites/favorites';
import StarRating from '../components/Cars/StarRating';
import Rent from '../imgs/rent.png';
import DeskMenu from '../components/DeskMenu';

const CarPage = () => {
  window.scrollTo(0, 0);
  const { carId } = useParams();
  const cars = useSelector((state) => state.carsReducer);

  const favorites = useSelector((state) => state.favoritesReducer);

  const sessionStatus = useSelector((state) => state.sessionStatus);

  const currentCar = cars.filter((car) => car.id === parseInt(carId, 10))[0];

  const inFavorites = () => {
    if (favorites.length > 0) {
      const favorite = favorites.filter(
        (fav) => fav.car_id === parseInt(currentCar.id, 10),
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
  return (
    <div>
      <div className="hidden md:flex lg:flex justify-between mx-auto py-6 bg-orange-700">
        <div className="w-1/2 px-5">
          <a href="/">
            <img
              src={Rent}
              alt="rent"
              width={400}
              className="flex self-start justify-self-start p-3"
            />
          </a>
        </div>
        <DeskMenu />
      </div>
      <div className="flex w-full mb-20">
        <div className="flex flex-col justify-between mx-auto h-screen lg:h-fit">
          <h3 className="lg:text-6xl lg:py-10 text-3xl font-bold tracking-wide text-gray-700 sm:mt-0 mb-5 sm:col-span-2 p-3">
            {currentCar.name}
          </h3>
          <div className="align-text-bottom mix-blend-multiply flex bg-gradient-to-t from-gray-800 via-transparent to-transparent">
            <div className="z-50 absolute text-xl self-end text-white p-5 flex w-full justify-between lg:justify-start md:justify-start items-end">
              <StarRating />
              <div className="flex align-bottom px-5 font-semibold lg:text-4xl">
                <span className="align-bottom mx-2">{currentCar.make}</span>
                -
                <span className="align-bottom mx-2">{currentCar.model}</span>
              </div>
            </div>
            <img
              className="shadow-xl mix-blend-overlay mx-auto w-full"
              src={currentCar.image}
              alt={currentCar.make}
            />
          </div>
          <div className="bg-white h-full flex flex-col justify-between">
            <div className="bg-white p-9 pb-4">
              <div className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 p-3 text-justify md:text-xl lg:text-xl md:mb-20 lg:mb-20">
                <p className="font-extrabold mb-5 text-base md:text-2xl lg:text-2xl">
                  About this car
                </p>
                {currentCar.description}
              </div>
            </div>
            <div className="rounded-md shadow">
              <button
                type="button"
                className={`active:bg-orange-400 w-full lg:mb-20 md:mx-auto lg:mx-auto md:w-1/3 lg:w-1/3 md:rounded-full lg:rounded-full flex items-center justify-center px-8 py-6 border border-transparent text-base font-medium text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 ${
                  sessionStatus.logged_in ? 'block' : 'hidden'
                } ${inFavorites() ? 'hidden' : 'block'}`}
                onClick={addCarToFavorites}>
                Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
