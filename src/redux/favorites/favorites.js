import { FAVORITES_ENDPOINT } from '../../endpoints';

const LOAD_FAVORITES = 'favorites/LOAD_FAVORITES';
const ADD_FAVORITES = 'favorites/ADD_FAVORITES';
const REMOVE_FAVORITE = 'favorites/REMOVE_FAVORITE';

const initialState = [];

export const loadFavorites = (payload) => ({
  type: LOAD_FAVORITES,
  payload,
});

const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});

export const removeFavorite = (payload) => ({
  type: REMOVE_FAVORITE,
  payload,
});

const getFavoritesFromApi = async (sessionStatus) => {
  const { userId, token } = sessionStatus;

  const response = await fetch(FAVORITES_ENDPOINT(userId), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });
  const favorites = await response.json();
  return favorites;
};

export const getFavorites = (sessionStatus) => async (dispatch) => {
  const favorites = getFavoritesFromApi(sessionStatus);
  favorites.then((favorite) => {
    dispatch(loadFavorites(favorite));
  });
};

export const postFavorite = (favorite, sessionStatus) => async (dispatch) => {
  const { userId, token } = sessionStatus;

  await fetch(FAVORITES_ENDPOINT(userId), {
    method: 'post',
    body: JSON.stringify({
      ...favorite,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(addFavorites(data)));
};

export const deleteFavourite = (favorite, sessionStatus) => async (dispatch) => {
  const { userId, token } = sessionStatus;

  await fetch(`${FAVORITES_ENDPOINT(userId)}/${favorite.id}`, {
    method: 'delete',
    body: JSON.stringify({
      id: favorite.id,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }).then(dispatch(removeFavorite(favorite)));
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return action.payload;
    case ADD_FAVORITES:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((favorite) => favorite.id !== action.payload.id);
    case 'CLEAR_FAVORITES':
      return initialState;
    default:
      return state;
  }
};

export default favoritesReducer;
