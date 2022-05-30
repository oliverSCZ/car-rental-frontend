import { CARS_ENDPOINT } from '../../endpoints';

const LOAD_CARS = 'cars/LOAD_CARS';
const ADD_CARS = 'cars/ADD_CARS';

const initialState = [];

export const loadCars = (payload) => ({
  type: LOAD_CARS,
  payload,
});

const addCars = (payload) => ({
  type: ADD_CARS,
  payload,
});

const getCarsFromApi = async () => {
  const response = await fetch(CARS_ENDPOINT);
  const cars = await response.json();
  return cars;
};

export const getCars = () => async (dispatch) => {
  const cars = getCarsFromApi();
  cars.then((car) => {
    dispatch(loadCars([...car]));
  });
};

// export const saveCarToApi = (car) => async (dispatch) => {
//   await fetch(CARS_ENDPOINT, {
//     method: 'post',
//     body: JSON.stringify({
//       ...car,
//     }),
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => dispatch(addCars(data)));
// };

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARS:
      return action.payload;
    case ADD_CARS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default carsReducer;
