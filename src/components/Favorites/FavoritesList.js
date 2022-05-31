import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/favorites/favorites';
import { deleteFavourite } from '../../redux/favorites/favorites';
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

  const favorites = favoritesSelector.map((favorite) => (
    <Favorite
      key={favorite.id}
      favorite={favorite}
      removeFavorite={() => removeFavorite(favorite.id)}
    />
  ));

  return (
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold">My Favorites</h1>
      <div className="container mx-auto flex flex-col">FAVS</div>
      <>{favorites}</>
    </div>
  );
};

export default FavoritesList;
