import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, deleteFavourite } from '../../redux/favorites/favorites';
import Favorite from './Favorite';
import DeskMenu from '../DeskMenu';
import Rent from './rent.png';

const FavoritesList = () => {
  const sessionStatus = useSelector((state) => state.sessionStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites(sessionStatus));
  }, []);

  const favoritesSelector = useSelector((state) => state.favoritesReducer);

  const removeFavorite = (favoriteId) => {
    const favorite = {
      id: favoriteId,
    };

    dispatch(deleteFavourite(favorite, sessionStatus));
  };

  const cars = useSelector((state) => state.carsReducer);

  const favorites = favoritesSelector.map((favorite) => {
    const currentCar = cars.filter(
      (car) => car.id === parseInt(favorite.car_id, 10),
    )[0];
    return (
      <Favorite
        key={favorite.id}
        car={currentCar}
        removeFavorite={() => removeFavorite(favorite.id)}
      />
    );
  });

  return (
    <div>
      <div className="hidden md:flex lg:flex justify-between mx-auto py-6 bg-orange-700">
        <div className="w-1/2 px-5">
          <a href="/">
            <img src={Rent} alt="rent" width={400} className="flex self-start justify-self-start p-3" />
          </a>
        </div>
        <DeskMenu />
      </div>
      <div className="p-10 pt-20">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <>{favorites}</>
      </div>

    </div>
  );
};

export default FavoritesList;
