import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ car, user, removeFavorite }) => {
  const { model, make, description } = car;

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <p className="car-model">{model}</p>
            <p className="car-make">{make}</p>
            <p className="car-description">{description}</p>
            <div className="d-flex justify-content-start align-items-center">
              <button
                type="button"
                className="btn btn-link book-links border-end border-end-1 px-2"
                onClick={removeFavorite}>
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
  car: PropTypes.shape({
    model: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default Favorite;
