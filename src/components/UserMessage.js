import React from 'react';
import PropTypes from 'prop-types';

const UserMessage = ({ message }) => (
  <div className="p-5">
    <p
      className={`text-lg ${
        message.type === 'error' ? 'text-orange-700' : 'text-green-800'
      }`}
    >
      {message.message}
    </p>
  </div>
);

UserMessage.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserMessage;
