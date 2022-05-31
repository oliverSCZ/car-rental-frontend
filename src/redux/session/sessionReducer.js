const sessionInitialState = { token: '', userId: 0, logged_in: false };

const sessionStatus = (state = sessionInitialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // console.log('LOGIn!');
      // console.log(action.payload);
      // console.log(action.payload.user);
      return {
        ...state, token: action.payload.token, userId: action.payload.user.id, logged_in: true,
      };
    case 'SESSION_RECOVERY':
      return {
        ...state, token: action.payload.token, userId: action.payload.userId, logged_in: true,
      };
    case 'LOGOUT':
      // console.log('LOGOUT!');
      localStorage.clear();
      return {
        ...state, token: '', userId: 0, logged_in: false,
      };
    default:
      return state;
  }
};

export default sessionStatus;
