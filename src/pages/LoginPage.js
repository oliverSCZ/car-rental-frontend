import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../redux/configureStore';

const baseURL = 'http://localhost:3001/login';

const loginCall = async (baseURL, options) => {
  fetch(baseURL, options)
    .then((response) => response.json())
    .then((json) => store.dispatch({ type: 'LOGIN', payload: json }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  const psw = event.target.psw.value;
  const uname = event.target.username.value;
  const body = JSON.stringify({
    username: uname,
    password: psw,
  });
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
  };
  loginCall(baseURL, options);
};

const LoginPage = () => {
  const session = useSelector((state) => state.sessionStatus);
  const navigate = useNavigate();

  if (session.logged_in) {
    navigate('/');
  }
  // console.log(session);
  return (
    <div className="p-10 pt-20">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <div className="container mx-auto flex flex-col">
        <form onSubmit={handleSubmit}>

          <div className="container flex flex-col">
            <input type="text" placeholder="Enter Username" name="username" className="text-xl p-5 border rounded-lg mb-3" required />

            <input type="password" placeholder="Enter Password" name="psw" className="text-xl p-5 border rounded-lg mb-3" required />

            <button className="relative inline-flex items-center justify-center p-3 mb-2 mr-2 overflow-hidden text-3xl font-medium text-black rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800" type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
