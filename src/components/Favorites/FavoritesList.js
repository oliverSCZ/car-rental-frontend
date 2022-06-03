import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../redux/favorites/favorites';
import Favorite from './Favorite';
import DeskMenu from '../DeskMenu';
import Rent from './rent.png';

const FavoritesList = () => {
  const dispatch = useDispatch();

  const sessionStatus = useSelector((state) => state.sessionStatus);

  useEffect(() => {
    dispatch(getFavorites(sessionStatus));
  }, []);

  const favoritesSelector = useSelector((state) => state.favoritesReducer);

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
        <Favorite favorites={favoritesSelector} />
      </div>

    </div>
  );
};

export default FavoritesList;
