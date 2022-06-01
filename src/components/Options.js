import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Close from '../imgs/close.png';

const Options = () => {
  const session = useSelector((state) => state.sessionStatus);
  const showMenu = useSelector((state) => state.optionsStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`z-50 h-screen w-full bg-gray-800 opacity-95 absolute ${
        showMenu.show ? 'block' : 'hidden'
      }`}
    >
      <ul className="mx-auto mt-20 h-full w-2/3 flex-col text-center text-4xl font-bold text-white">
        <li className={`py-6 ${session.logged_in ? 'block' : 'hidden'}`}>
          <button type="button" onClick={() => { navigate('/favorites'); dispatch({ type: 'HIDE' }); }}>
            My Favorites
          </button>
        </li>
        <li className={`py-6 ${session.logged_in ? 'hidden' : 'block'}`}>
          <button type="button" onClick={() => { navigate('/login'); dispatch({ type: 'HIDE' }); }}>
            Sign in
          </button>
        </li>
        <li className={`py-6 ${session.logged_in ? 'hidden' : 'block'}`}>
          <button type="button" onClick={() => { navigate('/signup'); dispatch({ type: 'HIDE' }); }}>
            Register
          </button>
        </li>
        <li className={`py-6 ${session.logged_in ? 'block' : 'hidden'}`}>
          <button type="button" onClick={() => { dispatch({ type: 'LOGOUT' }); navigate('/'); dispatch({ type: 'HIDE' }); }}>
            Logout
          </button>
        </li>
        {/* <li className={`py-6 ${loggedIn ? 'block' : 'hidden'}`}>
          <a
            href="/"
            onClick={() => dispatch({ type: 'HIDE' })}
          >
            Delete account
          </a>
        </li> */}
        <li className="flex justify-center py-20 invert">
          <button type="button" onClick={() => dispatch({ type: 'HIDE' })}>
            <img src={Close} alt="close options" width={40} />
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Options;
