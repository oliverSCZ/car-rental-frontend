const messagesInitialState = { show: false, payload: [''] };

const messagesStatus = (state = messagesInitialState, action) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return { ...state, show: true, payload: action.payload };
    case 'HIDE_MESSAGE':
      return { ...state, show: false, payload: [''] };
    default:
      return state;
  }
};

export default messagesStatus;
