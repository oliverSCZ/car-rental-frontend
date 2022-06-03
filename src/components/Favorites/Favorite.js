/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ car, removeFavorite }) => {
  const {
    image, make, model, name,
  } = car;

  return (
    <div className="p-10 pt-20">
      <div className="container mx-auto text-3xl">
        {name}
        {make}
        <img
          className="shadow-xl rounded-md"
          src={image}
          alt={model}
          width="300"
        />
        <button
          type="button"
          className="btn btn-link book-links border-end border-end-1 px-2"
          onClick={removeFavorite}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
Favorite.propTypes = {
  car: PropTypes.shape({
    image: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default Favorite;
