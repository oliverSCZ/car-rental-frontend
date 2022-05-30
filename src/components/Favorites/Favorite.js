import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ car, user, removeFavorite }) => (
  <div className="card">
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <p className="car-model">{car}</p>
          <p className="car-description">{user}</p>
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

Favorite.propTypes = {
  car: PropTypes.number.isRequired,
  user: PropTypes.number.isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default Favorite;
