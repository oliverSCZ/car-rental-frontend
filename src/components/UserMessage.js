import React from 'react';
import PropTypes from 'prop-types';

const UserMessage = ({ message }) => {
  const { userMessage } = message;

  return (
    <div>
      <p
        className={`text-sm ${
          message.type === 'error' ? 'text-red-500' : 'text-green-600'
        }`}>
        {userMessage.message}
      </p>
    </div>
  );
};

UserMessage.propTypes = {
  message: PropTypes.shape({
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserMessage;
