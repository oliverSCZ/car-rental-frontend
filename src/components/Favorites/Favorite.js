/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import StarRating from '../Cars/StarRating';
import { deleteFavourite } from '../../redux/favorites/favorites';

const Favorite = ({ favorites }) => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.carsReducer);

  const sessionStatus = useSelector((state) => state.sessionStatus);

  const removeFavorite = (favoriteId) => {
    const favorite = {
      id: favoriteId,
    };

    dispatch(deleteFavourite(favorite, sessionStatus));
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: false,
    centerPadding: '1px',
    slidesToShow: 1,
    speed: 500,
  };
  const list = favorites;

  const favoritesList = list.map((favorite) => {
    const currentCar = cars.filter(
      (car) => car.id === parseInt(favorite.car_id, 10),
    )[0];
    return (
      <div
        className="h-full flex justify-between mx-auto p-4 mt-10 rounded-b-xl"
        key={currentCar.id}
      >
        <div className="flex flex-col justify-between lg:w-8/12 md:w-4/5 lg:mx-auto md:mx-auto">
          <h3 className="text-4xl font-bold tracking-wide text-gray-700 sm:mt-0 mb-5 sm:col-span-2 p-3">
            {currentCar.name}
          </h3>
          <div className="align-text-bottom mix-blend-multiply flex bg-gradient-to-t from-gray-800 via-transparent to-transparent">
            <div className="z-50 absolute text-sm md:text-xl lg:text-2xl self-end text-white p-5 flex w-1/2 items-end justify-start">
              <div className="lg:pb-1 md:pb-1 pb-0.5 w-1/6 mr-10">
                <StarRating />
              </div>
              <div className="flex align-bottom content-end px-5 lg:px-0 font-semibold">
                <span className="align-bottom mx-2">{currentCar.make}</span>-
                <span className="align-bottom mx-2">{currentCar.model}</span>
              </div>
            </div>
            <img
              className="shadow-xl mix-blend-overlay rounded-xl w-full"
              src={currentCar.image}
              alt={currentCar.name}
            />
          </div>
          <div className="bg-white h-full container flex flex-col justify-between">
            <div className="bg-white p-9 pb-4">
              <div className="mt-1 text-base text-gray-900 sm:mt-0 sm:col-span-2 p-3 text-justify">
                <p className="font-extrabold mb-5 text-base">About this car</p>
                {currentCar.description}
              </div>
            </div>
            <div className="rounded-b-xl shadow">
              <button
                type="button"
                className={`active:bg-orange-400 w-full flex items-center justify-center px-8 py-6 border rounded-b-xl border-transparent text-base font-medium text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg md:px-10 ${
                  sessionStatus.logged_in ? 'block' : 'hidden'
                }`}
                onClick={() => removeFavorite(favorite.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slider {...settings}>{favoritesList}</Slider>;
};
Favorite.propTypes = {
  favorites: PropTypes.shape({
    car_id: PropTypes.number.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Favorite;
