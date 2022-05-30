import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/favorites/favorites';
import Favorite from './Favorite';

const FavoritesList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  const favoritesSelector = useSelector((state) => state.favoritesReducer);

  const removeFavorite = (favoriteId) => {
    const favorite = {
      id: favoriteId,
    };

    dispatch(removeFavorite(favorite));
  };

  const favorites = favoritesSelector.map((favorite) => (
    <Favorite
      key={favorite.id}
      car={favorite.car_id}
      user={favorite.user_id}
      removeFavorite={() => removeFavorite(favorite.id)}
    />
  ));

  return <div>{favorites}</div>;
};

export default FavoritesList;
