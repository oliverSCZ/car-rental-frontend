/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import CarsArray from './CarsArray';

const CarSlide = () => {
  const carSelector = useSelector((state) => state.carsReducer);
  const cars = carSelector.map((car) => (
    <CarsArray
      key={car.id}
      id={car.id}
      name={car.name}
      image={car.image}
      make={car.make}
      model={car.model}
    />
  ));
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        {cars}
      </Slider>
    </div>
  );
};

export default CarSlide;
