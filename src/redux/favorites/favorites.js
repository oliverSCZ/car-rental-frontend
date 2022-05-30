import { FAVORITES_ENDPOINT } from '../../endpoints';

const LOAD_FAVORITES = 'favorites/LOAD_FAVORITES';
const ADD_FAVORITES = 'favorites/ADD_FAVORITES';

const initialState = [];

export const loadFavorites = (payload) => ({
  type: LOAD_FAVORITES,
  payload,
});

const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
});

const getFavoritesFromApi = async () => {
  const response = await fetch(FAVORITES_ENDPOINT);
  const favorites = await response.json();
  return favorites;
};

export const getFavorites = () => async (dispatch) => {
  const favorites = getFavoritesFromApi();
  favorites.then((favorite) => {
    favorite.forEach((favorite) => {
      dispatch(loadFavorites(favorite));
    });
  });
};

export const saveFavoriteToApi = (favorite) => async (dispatch) => {
  await fetch(FAVORITES_ENDPOINT, {
    method: 'post',
    body: JSON.stringify({
      ...favorite,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => dispatch(addFavorites(data)));
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES:
      return [...state, action.payload];
    case ADD_FAVORITES:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default favoritesReducer;
