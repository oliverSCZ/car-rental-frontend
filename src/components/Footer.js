import React from 'react';
import Rent from '../imgs/rent.png';

const Footer = () => (
  <div className="hidden w-full md:block lg:block mr-0">
    <div className="w-full bg-center text-white text-2xl flex flex-col pt-10 md:bg-[url('https://images.unsplash.com/photo-1581609836630-9007630f7a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')] lg:bg-[url('https://images.unsplash.com/photo-1581609836630-9007630f7a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80')]">
      <p className="text-white">A sheer driving pleasure</p>
      <div className="flex mx-auto my-10">
        <button
          className="rounded-full bg-orange-600 text-white text-xl p-4 px-10"
          type="button"
        >
          GET AN ESTIMATE
        </button>
      </div>
    </div>
    <div className="p-10 text-gray-400">
      <div className="px-5 flex justify-center">
        <img
          src={Rent}
          alt="rent"
          width={400}
          className="flex self-start justify-self-start p-3"
        />
      </div>
      <p className="p-2">Windhoek Ave 777, Santa Cruz de la Sierra, Mexico</p>
      <p className="p-2">+33 895 984 214</p>
      <div className="flex justify-center">
        <img
          className="p-3"
          alt="facebook"
          src="https://img.icons8.com/color/48/undefined/facebook-new.png"
        />
        <img
          className="p-3"
          alt="twitter"
          src="https://img.icons8.com/color/48/undefined/twitter-circled--v1.png"
        />
        <img
          className="p-3"
          alt="instagram"
          src="https://img.icons8.com/color-glass/48/undefined/instagram-new.png"
        />
      </div>
      <p className="p-2">Rent-a-Car 2022. All rigths reserved.</p>
    </div>
  </div>
);

export default Footer;
