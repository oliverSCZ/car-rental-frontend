import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarsList = ({
  id, name, make, image, model,
}) => (
  <div>
    <h2 className="font-bold text-center">{name}</h2>
    <Link to={`/car/${id}`}>
      <img
        className="shadow-xl rounded-md"
        src={image}
        alt={model}
        width="300"
      />
    </Link>
    <h2 className="font-bold text-center">{make}</h2>
    <h2 className="font-bold text-center">{model}</h2>
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
