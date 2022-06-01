import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Options from './Options';
import Arrow from '../imgs/arrow.png';
// import More from '../imgs/more.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.optionsStatus);
  return (
    <div className="fixed z-40 w-full">
      <header
        className={`sticky application-header flex h-16 justify-between py-4 px-3 ${
          pathname === '/login' ? 'bg-transparent' : 'bg-orange-600'
        } ${pathname === '/signup' ? 'bg-transparent' : 'bg-orange-600'} ${
          showMenu.show ? 'bg-gray-800/95' : 'bg-orange-600'
        }`}
      >
        <div className="invert">
          <button
            type="button"
            id="go-back"
            onClick={() => {
              navigate('/');
              dispatch({ type: 'HIDE' });
            }}
            className={`${pathname === '/' ? 'hidden' : 'block'}`}
          >
            <img alt="arrow-back" src={Arrow} width="25" className="" />
          </button>
        </div>
        <h1
          className={`font-Work text-2xl font-bold text-gray-800 ${
            pathname === '/login' ? 'hidden' : 'block'
          } ${pathname === '/signup' ? 'hidden' : 'block'} ${
            showMenu.show ? 'hidden' : 'block'
          }`}
        >
          RENT-A-CAR
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6  ${showMenu.show ? 'hidden' : 'block'}`}
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
      <Options />
    </div>
  );
};

export default Header;
