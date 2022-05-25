import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarsList = ({ id, name, make, image, model}) => (
  <div className="feature col">
    <Link to={`/cars/${id}`}>

      <img
        className="img-fluid"
        src="https://fotos.perfil.com/2020/04/06/ford-mustang-gt-50-935823.jpg"
        alt="Ford Mustang GT"
        width="300"
      />
      <h5>{name}</h5>
      <span>{make}</span>
    </Link>
  </div>
);

CarsList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
};

export default CarsList;
