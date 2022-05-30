import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import favoritesReducer from './favorites/favorites';
import carsReducer from './cars/cars';
import optionsStatus from './options/optionsReducer';
import sessionStatus from './session/sessionReducer';

const reducer = combineReducers({
  favoritesReducer,
  carsReducer,
  optionsStatus,
  sessionStatus,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
