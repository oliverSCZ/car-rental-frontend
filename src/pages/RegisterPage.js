import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../redux/configureStore';
import bgImg from '../resources/bg1.jpg';

const baseURL = 'http://localhost:3001/users';

const createUserAPI = async (baseURL, options) => {
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
  createUserAPI(baseURL, options);
  // console.log(psw);
  // console.log(uname);
};

const RegisterPage = () => {
  const session = useSelector((state) => state.sessionStatus);
  const navigate = useNavigate();
  if (session.logged_in) {
    navigate('/');
  }
  return (
    <div
      className="h-screen flex w-full content-center justify-center bg-sky-500/50"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full m-0 p-10 flex flex-col content-center justify-center bg-white/75">
        <h1 className="text-4xl mb-2">Register</h1>
        <div className="flex justify-center m-5 mb-20">
          <p className="text-base w-2/3 font-medium">Welcome! We are happy to have to here!</p>
        </div>
        <div className="container mx-auto flex flex-col w-4/5">
          <form onSubmit={handleSubmit}>

            <div className="container flex flex-col">
              <input type="text" placeholder="Enter Username" name="username" className="text-center text-xl p-3 border rounded-full mb-5" required />

              <input type="password" placeholder="Enter Password" name="psw" className="text-orange-600 text-center text-xl p-3 border rounded-full mb-5" required />

              <button className="rounded-full bg-orange-600 text-white w-1/2 mx-auto text-lg p-3" type="submit">Create account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
