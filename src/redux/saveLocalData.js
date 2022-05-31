import store from './configureStore';

const saveData = () => {
  const sessionData = store.getState().sessionStatus;
  const saveCollection = JSON.stringify(sessionData);
  localStorage.setItem('sessionData', saveCollection);
};

export default saveData;
