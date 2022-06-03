import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/favorites/favorites';
import Favorite from './Favorite';

const FavoritesList = () => {
  const dispatch = useDispatch();

  const sessionStatus = useSelector((state) => state.sessionStatus);

  useEffect(() => {
    dispatch(getFavorites(sessionStatus));
  }, []);

  const favoritesSelector = useSelector((state) => state.favoritesReducer);

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Favorite favorites={favoritesSelector} />
    </div>
  );
};

export default FavoritesList;
