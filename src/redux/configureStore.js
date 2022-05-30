import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import favoritesReducer from './favorites/favorites';
import carsReducer from './cars/cars';

const reducer = combineReducers({
  favoritesReducer,
  carsReducer,
  // additional reducers could be added here
});

const store = createStore(
  reducer, applyMiddleware(thunk, logger),
);
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export default store;
