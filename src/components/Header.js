import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Arrow from '../imgs/arrow.png';
import More from '../imgs/more.png';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();
  const showMenu = useSelector((state) => state.optionsStatus);
  return (
    <div className="fixed z-40 w-full">
      <header className="sticky h-16 flex justify-between py-4 px-3 bg-transparent">
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
              style={{
                filter: 'invert(0.50)',
              }}
            />
          </button>
        </div>
        <h1 className={`font-Work text-2xl font-bold text-white ${
          pathname === '/login' ? 'hidden' : 'block'
        } ${
          pathname === '/signup' ? 'hidden' : 'block'
        } ${
          showMenu.show ? 'hidden' : 'block'
        }`}
        >
          Rent-a-Car

        </h1>
        <button
          type="button"
          className="pr-3"
          onClick={() => dispatch({ type: 'SHOW' })}
        >
          <img
            alt="options"
            src={More}
            width="25"
            className={`pt-1 ${
              showMenu.show ? 'hidden' : 'block'
            }`}
            style={{
              filter: 'invert(0.50)',
            }}
          />
        </button>
      </header>
    </div>
  );
};

export default Header;
