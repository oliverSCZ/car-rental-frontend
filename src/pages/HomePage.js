import { useSelector } from 'react-redux';
import React from 'react';
import CarList from '../components/Cars/CarList';
import Rent from '../imgs/rent.png';
import DeskMenu from '../components/DeskMenu';

const HomePage = () => {
  window.scrollTo(0, 0);
  const cars = useSelector((state) => state.carsReducer);

  return (
    <div className="f-full p-10 pt-20 md:p-0 lg:p-0">
      <div className="hidden pt-10 w-full lg:flex-col md:flex-col lg:flex md:flex md:h-full lg:h-full md:bg-[url('https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] lg:bg-[url('https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')]">
        <div className="flex w-full">
          <div className="w-1/2 px-5">
            <img src={Rent} alt="rent" width={400} className="flex self-start justify-self-start p-3" />
          </div>
          <DeskMenu />
        </div>
        <div className="bg-slate-900/50 m-10 w-1/2 p-10 rounded-lg mt-24">
          <p className="text-white text-6xl w-1/2 text-left">Find a car anywhere</p>
          <p className="text-white text-xl text-left mt-10 w-2/3">
            The best offers for you at any point of your journey.
            Wherever you are, feel yourself under control and drive away!
          </p>
          <div className="flex my-10">
            <button className="rounded-full bg-orange-600 text-white w-1/2 ml-0 text-xl p-4 px-2" type="button">START FREE</button>
          </div>
        </div>
      </div>
      <h2 className="hidden text-4xl font-semibold p-10 md:block lg:block">Our Cars</h2>
      <div className="">
        <CarList carSelector={cars} />
      </div>
    </div>
  );
};
export default HomePage;
