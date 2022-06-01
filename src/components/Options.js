import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Close from '../imgs/close.png';
import User from '../imgs/user.png';

const Options = () => {
  const session = useSelector((state) => state.sessionStatus);
  const showMenu = useSelector((state) => state.optionsStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`z-50 h-screen w-full bg-gray-800/75 absolute ${
        showMenu.show ? 'block' : 'hidden'
      }`}
    >
      <div className="text-left w-4/5 h-full bg-gray-800 opacity-95 pl-10">
        <div className={`${session.logged_in ? 'block' : 'hidden'}`}>
          <div className="container flex justify-between w-full pt-10">
            <img src={User} alt="user" width={80} className="" />
            <button type="button" onClick={() => dispatch({ type: 'HIDE' })}>
              <img src={Close} alt="close options" width={30} className="mr-10 invert" />
            </button>
          </div>
          <div className="container w-full pt-10 mb-5">
            <p className="text-white text-2xl">Sara Moor</p>
            <p className="text-gray-400 text-xl">@saramoor</p>
          </div>
        </div>

        <ul className="h-full w-2/3 flex-col text-left text-2xl font-bold text-white">
          <li className={`py-5 ${session.logged_in ? 'block' : 'hidden'}`}>
            <button type="button" onClick={() => { navigate('/favorites'); dispatch({ type: 'HIDE' }); }}>
              Favorites
            </button>
          </li>
          <li className={`py-5 pt-36 text-3xl ${session.logged_in ? 'hidden' : 'block'}`}>
            <button type="button" onClick={() => { navigate('/login'); dispatch({ type: 'HIDE' }); }}>
              Sign in
            </button>
          </li>
          <li className={`py-5 text-3xl ${session.logged_in ? 'hidden' : 'block'}`}>
            <button type="button" onClick={() => { navigate('/signup'); dispatch({ type: 'HIDE' }); }}>
              Register
            </button>
          </li>
          <li className={`py-5 mt-8 text-gray-400 border-t text-xl ${session.logged_in ? 'block' : 'hidden'}`}>
            <button type="button" onClick={() => { dispatch({ type: 'LOGOUT' }); navigate('/'); dispatch({ type: 'HIDE' }); }}>
              Logout
            </button>
          </li>
          <li className={`container mt-10 ${session.logged_in ? 'hidden' : 'block'}`}>
            <button className="w-full container" type="button" onClick={() => dispatch({ type: 'HIDE' })}>
              <img src={Close} alt="close options" width={30} className="invert" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Options;
