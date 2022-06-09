import { store } from './configureStore';
import saveData from './saveLocalData';

const getData = () => {
  if (localStorage.getItem('sessionData')) {
    const savedData = JSON.parse(localStorage.getItem('sessionData'));
    store.dispatch({ type: 'SESSION_RECOVERY', payload: savedData });
    saveData();
  }
};
export default getData;
