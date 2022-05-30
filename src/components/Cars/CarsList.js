import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Slider from "react-slick";
import car from '../../App'

const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

// const CarsList = ({ id, name, make, image, model}) => (
const CarsList = (props) => (

  <div>
      <h2>{props.name}</h2>

      <Slider {...settings}>
       { [props].map((item) => {
        return 
         <img
        className="img-fluid"
        src={item.image}
        alt={item.model}
        width="300"
         />;
       })}
      </Slider>
  </div>

  // <div className="feature col">
  //   <Link to={`/cars/${id}`}>

  //     <img
  //       className="img-fluid"
  //       src={image}
  //       alt={model}
  //       width="300"
  //     />
  //     <h5>{name}</h5>
  //     <span>{make}</span>
  //   </Link>
  // </div>

     // <div>
        //    <img
        //     className="img-fluid"
        //     src={image}
        //     alt={model}
        //     width="300"
        //   />
        // </div

);

CarsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default CarsList;
