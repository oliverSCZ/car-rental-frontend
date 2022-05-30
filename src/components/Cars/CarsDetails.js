/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { getCars } from '../../redux/cars/cars';

const CarsDetails = () => {
  const { id } = useParams();

  const carSelector = useSelector((state) => state.carsReducer);
  
  carSelector.map((car) => {
    console.log(car.name);
  });

  const car = carSelector.find(
    (car) => car.id === parseInt(id, 10),
    );

  return (
    <div className="grid-cols-3 gap-4 flex items-center">
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3"
          src={car.image}
          alt={car.model}
        />
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          {' '}
          {car.name}
        </h5>
        <span className="text-center text-sm text-gray-500 dark:text-gray-400">
          {car.description}
        </span>
      </div>
    </div>
  );
};

export default CarsDetails;
