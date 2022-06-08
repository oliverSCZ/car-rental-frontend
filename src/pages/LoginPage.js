import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import saveData from '../redux/saveLocalData';
import store from '../redux/configureStore';
import UserMessage from '../components/UserMessage';

// const baseURL = 'https://stormy-lake-55546.herokuapp.com/login';
const baseURL = 'http://127.0.0.1:3001/login';

const LoginPage = () => {
  const loginCall = async (baseURL, options) => {
    fetch(baseURL, options)
      .then((response) => response.json())
      .then((json) => {
        if ('error' in json) {
          store.dispatch({ type: 'SHOW_MESSAGE', payload: json.error });
        } else {
          store.dispatch({ type: 'HIDE_MESSAGE' });
          store.dispatch({ type: 'LOGIN', payload: json });
          saveData();
        }
      });
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

  const session = useSelector((state) => state.sessionStatus);
  const navigate = useNavigate();

  if (session.logged_in) {
    navigate('/');
  }
  return (
    <div
      className="h-screen flex w-full content-center justify-center bg-sky-500/50"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full m-0 p-10 flex flex-col content-center justify-center bg-white/75">
        <div className="md:bg-slate-800/50 lg:bg-slate-800/50 md:rounded-xl lg:rounded-xl md:p-10 lg:p-10 md:w-1/2 lg:w-1/2 md:mx-auto lg:mx-auto">
          <h1 className="text-4xl mb-2">Sign in</h1>
          <div className="flex justify-center m-5 mb-10">
            <p className="text-base w-2/3 font-medium">
              Hello there! Sign in and start adding your favorites
            </p>
          </div>
          <UserMessage type="error" />
          <div className="container mx-auto flex flex-col w-full">
            <form onSubmit={handleSubmit}>
              <div className="container flex flex-col">
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  className="bg-gray-100/[.7] text-center text-xl p-3 border-2 border-slate-300 rounded-full mb-5"
                  required
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  name="psw"
                  className="bg-gray-100/[.7] border-2 border-slate-300 text-orange-600 text-center text-xl p-3 rounded-full mb-5"
                  required
                />

                <button
                  className="rounded-full bg-orange-600 text-white w-1/2 mx-auto text-xl p-3"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
