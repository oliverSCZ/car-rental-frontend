import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import favoritesReducer from './favorites/favorites';
import carsReducer from './cars/cars';

const reducer = combineReducers({
  favoritesReducer,
  carsReducer,
  // additional reducers could be added here
});

<<<<<<< HEAD
const store = configureStore(reducer, applyMiddleware(thunk, logger));

=======
const store = createStore(
  reducer, applyMiddleware(thunk, logger),
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
>>>>>>> dev
export default store;
