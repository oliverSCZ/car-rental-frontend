/* eslint-disable camelcase */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ favorite, removeFavorite }) => {
  const { car_id, user_id } = favorite;
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p className="car-model">Car Id: {car_id}</p>
            <p className="car-description">{user_id}</p>
            <div className="d-flex justify-content-start align-items-center">
              <button
                type="button"
                className="btn btn-link book-links border-end border-end-1 px-2"
                onClick={removeFavorite}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Favorite.propTypes = {
  favorite: PropTypes.shape({
    user_id: PropTypes.number.isRequired,
    car_id: PropTypes.number.isRequired,
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default Favorite;
