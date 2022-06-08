const HOST_URL = 'https://stormy-lake-55546.herokuapp.com';

export const CARS_ENDPOINT = `${HOST_URL}/cars`;

export const FAVORITES_ENDPOINT = (userId) => `${HOST_URL}/users/${userId}/favorites`;
