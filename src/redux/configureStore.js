import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import favoritesReducer from './favorites/favorites';
import carsReducer from './cars/cars';
import optionsStatus from './options/optionsReducer';
import sessionStatus from './session/sessionReducer';
import messagesStatus from './messages/userMessageReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
  favoritesReducer,
  carsReducer,
  optionsStatus,
  sessionStatus,
  messagesStatus,
  // additional reducers could be added here
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export { store, persistor };
