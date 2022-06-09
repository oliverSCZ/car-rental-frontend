import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rent from '../imgs/rent.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.optionsStatus);
  return (
    <div className="fixed z-40 w-full md:hidden lg:hidden">
      <header className="sticky h-16 flex justify-between py-4 px-3 bg-transparent">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-10 w-10 ${pathname === '/' ? 'hidden' : 'block'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            onClick={() => {
              navigate('/');
              dispatch({ type: 'HIDE' });
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          className={`w-3/6 text-2xl font-bold text-gray-800 ${
            pathname === '/login' ? 'hidden' : 'block'
          } ${pathname === '/signup' ? 'hidden' : 'block'} ${pathname.includes('/car/') ? 'hidden' : 'block'} ${
            showMenu.show ? 'hidden' : 'block'
          }`}
        >
          <img src={Rent} alt="rent" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-10 w-10 pr-2 ${showMenu.show ? 'hidden' : 'block'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => dispatch({ type: 'SHOW' })}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </header>
    </div>
  );
};

export default Header;
