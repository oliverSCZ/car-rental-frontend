import React from 'react';
import PropTypes from 'prop-types';

const UserMessage = ({ props }) => {
  const { userMessage } = props;

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

export default UserMessage;
