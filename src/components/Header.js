import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Options from './Options';
import Arrow from '../imgs/arrow.png';
import Dots from '../imgs/dots.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  return (
    <div className="fixed z-40 w-full">
      <header className="sticky flex h-16 justify-between bg-orange-800 py-4 px-3">
        <div className="invert">
          <button
            type="button"
            id="go-back"
            onClick={() => {
              navigate('/');
              dispatch({ type: 'HIDE' });
            }}
            className={`${
              pathname === '/' ? 'hidden' : 'block'
            }`}
          >
            <img
              alt="arrow-back"
              src={Arrow}
              width="25"
              className=""
            />
          </button>
        </div>
        <h1 className="font-Work text-2xl font-bold text-white">Rent-a-Car</h1>
        <button
          type="button"
          className="pr-3"
          onClick={() => dispatch({ type: 'SHOW' })}
        >
          <img alt="options" src={Dots} width="25" className="pt-1 invert" />
        </button>
      </header>
      <Options />
    </div>
  );
};

export default Header;
