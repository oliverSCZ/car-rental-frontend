import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const UserMessage = ({ type }) => {
  const showMessage = useSelector((state) => state.messagesStatus);

  return (
    <>
      <div className={`p-5  ${showMessage.show ? 'block' : 'hidden'}`}>
        <p
          className={`text-lg ${
            type === 'error' ? 'text-orange-700' : 'text-green-800'
          }`}>
          {showMessage.payload}
        </p>
      </div>
    </>
  );
};

UserMessage.propTypes = {
  type: PropTypes.string.isRequired,
};

export default UserMessage;
