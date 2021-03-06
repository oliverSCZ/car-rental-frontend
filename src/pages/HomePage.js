import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CarList from '../components/Cars/CarList';
import { getFavorites } from '../redux/favorites/favorites';
import Rent from '../imgs/rent.png';
import DeskMenu from '../components/DeskMenu';
import FooterMobile from '../components/FooterMobile';

const HomePage = () => {
  window.scrollTo(0, 0);
  const carsSelector = useSelector((state) => state.carsReducer);

  const dispatch = useDispatch();

  const sessionStatus = useSelector((state) => state.sessionStatus);

  useEffect(() => {
    if (sessionStatus.logged_in) {
      dispatch(getFavorites(sessionStatus));
    }
  }, []);

  return (
    <div className="f-full p-10 pt-20 md:p-0 lg:p-0">
      <div className="hidden pt-10 w-full lg:flex-col md:flex-col lg:flex md:flex md:h-full lg:h-full bg-cover bg-no-repeat md:bg-[url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')] lg:bg-[url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80')]">
        <div className="flex w-full">
          <div className="w-1/2 px-5">
            <img
              src={Rent}
              alt="rent"
              width={400}
              className="flex self-start justify-self-start p-3"
            />
          </div>
          <DeskMenu />
        </div>
        <div className="bg-slate-900/50 m-10 w-1/2 p-10 rounded-lg mt-24">
          <p className="text-white text-6xl w-1/2 text-left">
            Find a car anywhere
          </p>
          <p className="text-white text-xl text-left mt-10 w-2/3">
            The best offers for you at any point of your journey. Wherever you
            are, feel yourself under control and drive away!
          </p>
          <div className="flex my-10">
            <button
              className="rounded-full bg-orange-600 text-white w-1/2 ml-0 text-xl p-4 px-2"
              type="button"
            >
              GET AN ESTIMATE
            </button>
          </div>
        </div>
      </div>
      <h2 className="hidden text-4xl font-semibold p-10 md:block lg:block">
        Our Cars
      </h2>
      <div className="lg:py-10 lg:mb-10 mt-10">
        <CarList cars={carsSelector || 0} />
      </div>
      <div className="block lg:hidden md:hidden w-full border-t mt-10 pt-2">
        <FooterMobile />
      </div>
    </div>
  );
};
export default HomePage;
