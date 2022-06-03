import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import User from '../imgs/user.png';

const DeskMenu = () => {
  const session = useSelector((state) => state.sessionStatus);
  const favCount = useSelector((state) => state.favoritesReducer.length);
  const username = useSelector((state) => state.sessionStatus.userName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-1/2">
      <ul
        className={`text-2xl flex font-bold text-orange-600 px-10 ${
          session.logged_in ? 'justify-between' : 'justify-end'
        }`}
      >
        <li
          className={`py-5 px-5 text-2xl ${
            session.logged_in ? 'hidden' : 'block'
          }`}
        >
          <button
            className="py-2 px-5"
            type="button"
            onClick={() => {
              navigate('/login');
              dispatch({ type: 'HIDE' });
            }}
          >
            SIGN IN
          </button>
        </li>
        <li
          className={`py-5 text-2xl ${session.logged_in ? 'hidden' : 'block'}`}
        >
          <button
            className="bg-gray-900/70 rounded-full py-2 px-5 text-white"
            type="button"
            onClick={() => {
              navigate('/signup');
              dispatch({ type: 'HIDE' });
            }}
          >
            SIGN UP
          </button>
        </li>
        <li
          className={`py-8 text-2xl w-full ${
            session.logged_in ? 'block' : 'hidden'
          }`}
        >
          <button
            type="button"
            onClick={() => {
              navigate('/favorites');
              dispatch({ type: 'HIDE' });
            }}
          >
            Favorites
          </button>
          <p className="text-xl font-medium inline mx-3 px-3 rounded-full bg-orange-500 text-white text-center">
            {favCount}
            {' '}
          </p>
        </li>
        <li>
          <div className="container py-5 text-orange-600">
            <img
              src={User}
              alt="user"
              width={100}
              className={`mx-2 ${session.logged_in ? '' : 'opacity-0'}`}
            />
          </div>
        </li>
        <li>
          <div
            className={`py-8 container w-full ${
              session.logged_in ? 'block' : 'hidden'
            }`}
          >
            <p className="text-orange-600 text-2xl px-5">{username}</p>
          </div>
        </li>
        <li
          className={`py-6 mx-5 text-2xl ${
            session.logged_in ? 'block' : 'hidden'
          }`}
        >
          <button
            className="bg-gray-900/70 rounded-full py-2 px-5 text-white"
            type="button"
            onClick={() => {
              dispatch({ type: 'LOGOUT' });
              navigate('/');
              dispatch({ type: 'HIDE' });
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
export default DeskMenu;
