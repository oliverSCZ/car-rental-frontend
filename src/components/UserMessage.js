import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const UserMessage = ({ type }) => {
  const showMessage = useSelector((state) => state.messagesStatus);
  const alerts = showMessage.payload;

  return (
    <div className={`p-5  ${showMessage.show ? 'block' : 'hidden'}`}>
      <div
        role="alert"
        className={`flex-col p-4 mb-4 text-base rounded-lg ${
          type === 'error' ? 'text-orange-700 bg-red-100' : 'text-green-800 bg-green-100'
        }`}
      >
        {alerts.map((error, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index}>
            <p className="my-1">{error}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

UserMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default UserMessage;
