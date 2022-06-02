/* eslint-disable max-len */
const sessionInitialState = {
  token: '', userId: 0, userName: '', logged_in: false,
};

const sessionStatus = (state = sessionInitialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // console.log(action.payload.user.username);
      return {
        ...state, token: action.payload.token, userId: action.payload.user.id, userName: action.payload.user.username, logged_in: true,
      };
    case 'SESSION_RECOVERY':
      return {
        ...state, token: action.payload.token, userId: action.payload.userId, userName: action.payload.userName, logged_in: true,
      };
    case 'LOGOUT':
      // console.log('LOGOUT!');
      localStorage.clear();
      return {
        ...state, token: '', userId: 0, userName: '', logged_in: false,
      };
    default:
      return state;
  }
};

export default sessionStatus;
