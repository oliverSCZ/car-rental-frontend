import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import store from '../redux/configureStore';

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
        backgroundImage: 'url("https://images.unsplash.com/photo-1586277526843-23a623285cd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full m-0 p-10 flex flex-col content-center justify-center bg-white/75">
        <div className="md:bg-slate-800/50 lg:bg-slate-800/50 md:rounded-xl lg:rounded-xl md:p-10 lg:p-10 md:w-1/2 lg:w-1/2 md:mx-auto lg:mx-auto">
          <h1 className="text-4xl mb-2">Register</h1>
          <div className="flex justify-center m-5 mb-20">
            <p className="text-base w-2/3 font-medium">Welcome! We are happy to have to here!!</p>
          </div>
          <div className="container mx-auto flex flex-col w-full">
            <form onSubmit={handleSubmit}>

              <div className="container flex flex-col">
                <input type="text" placeholder="Enter Username" name="username" className="bg-gray-100/[.7] border-2 border-slate-300 text-center text-xl p-3 rounded-full mb-5" required />

                <input type="password" placeholder="Enter Password" name="psw" className="bg-gray-100/[.7] border-2 border-slate-300 text-orange-600 text-center text-xl p-3 rounded-full mb-5" required />

                <button className="rounded-full bg-orange-600 text-white w-1/2 mx-auto text-lg p-3" type="submit">Create account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
