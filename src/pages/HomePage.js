import { useSelector } from 'react-redux';
import React from 'react';

import CarList from '../components/Cars/CarList';

const HomePage = () => {
  const cars = useSelector((state) => state.carsReducer);

  return (
    <div className="p-10 pt-20">
      <CarList carSelector={cars} />
    </div>
  );
};
export default HomePage;
