import { combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import favoritesReducer from './favorites/favorites';

const reducer = combineReducers({
  favoritesReducer,
  // additional reducers could be added here
});

const store = configureStore(reducer, applyMiddleware(thunk, logger));

export default store;
