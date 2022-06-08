const messagesInitialState = { show: false };

const messagesStatus = (state = messagesInitialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, show: true };
    case 'HIDE':
      return { ...state, show: false };
    default:
      return state;
  }
};

export default messagesStatus;
