import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { getFavorites, deleteFavourite } from '../../redux/favorites/favorites';
import Favorite from './Favorite';

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

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 1,
    speed: 500,
  };

  const favorites = favoritesSelector.map((favorite) => {
    const currentCar = cars.filter(
      (car) => car.id === parseInt(favorite.car_id, 10)
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
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold">My Favorites</h1>
      <div className="container mx-auto flex flex-col">FAVS</div>
      <Slider {...settings}>{favorites}</Slider>
    </div>
  );
};

export default FavoritesList;
